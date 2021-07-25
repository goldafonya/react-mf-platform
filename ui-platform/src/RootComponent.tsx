import React, {FC, Suspense} from "react";
import {useAuth} from "./hooks/useAuth";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const AppLazy = React.lazy(() => import(
    /* webpackChunkName: "app" */
    "./components/App"
    ));
const LoginLazy = React.lazy(() => import(
    /* webpackChunkName: "login" */
    "./components/login/Login"
    ));

const Loader = () => (
    <Container maxWidth="md">
        <Grid justify="center" container>
            <CircularProgress/>
        </Grid>
    </Container>
);

const RootComponent: FC = () => {
    const {auth} = useAuth();

    if (auth === null) return (
        <Loader/>
    );
    if (!auth) return (
        <Suspense fallback={<Loader/>}>
            <LoginLazy/>
        </Suspense>
    );
    return (
        <Suspense fallback={<Loader/>}>
            <AppLazy/>
        </Suspense>
    );
};

export default RootComponent;