import React from "react";
import Container from "@material-ui/core/Container";
import {Header} from "./Header";
import {ProjectList} from "./ProjectList";
import {createHistory, LocationProvider, Router} from "@reach/router";
import {ROUTES} from "../constants/ROUTES";
import ProjectService from "../services/ProjectService";

// @ts-ignore
let history = createHistory(window);

const App = () => {

    return (
        <>
            <LocationProvider history={history}>
                <Header/>
                <Container maxWidth="md">
                    <Router>
                        <ProjectList default path={ROUTES.ROOT}/>
                        {ProjectService.getProjectList().map(p => (
                            <p.component
                                path={p.url}
                                key={p.url}
                            />
                        ))}
                    </Router>
                </Container>
            </LocationProvider>
        </>
    )
};

export default App;