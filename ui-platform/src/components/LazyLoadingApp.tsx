/* @ts-ignore */
// @ts-nocheck
import React from "react";
import {Link, RouteComponentProps} from "@reach/router";
import {ROUTES} from "../constants/ROUTES";
import Loader from "./Loader";
import Project from "../models/Project";

const loadComponent = (scope, module) => {
    return async () => {
        // Initializes the share scope. This fills it with known provided modules from this build and all remotes
        await __webpack_init_sharing__("default");

        const container = window[scope]; // or get the container somewhere else
        // Initialize the container, it may provide shared modules
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    };
}

const useDynamicScript = (args: any) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement("script");

        element.src = args.url;
        element.type = "text/javascript";
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return {
        ready,
        failed,
    };
};

function System(props: any) {
    const {ready, failed} = useDynamicScript({
        url: props.system && props.system.url,
    });

    if (!props.system) {
        return <h2>Not system specified</h2>;
    }

    if (!ready) {
        return <Loader/>;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {props.system.url}</h2>;
    }

    const Component = React.lazy(
        loadComponent(props.system.scope, props.system.module)
    );

    return (
        <React.Suspense fallback={Loader}>
            <Component/>
        </React.Suspense>
    );
}

const LazyLoadingApp: React.FC<RouteComponentProps & { project: Project }> = (props) => {
    const {project} = props;

    return (
        <div>
            <div>
                <Link to={ROUTES.ROOT}>Назад</Link>
            </div>
            <System system={{
                url: project.url,
                scope: project.id,
                module: project.module,
            }}/>
        </div>
    );
}

export default LazyLoadingApp;
