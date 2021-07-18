import React from "react";
import Container from "@material-ui/core/Container";
import {Header} from "./Header";
import {ProjectList} from "./ProjectList";

const RootComponent = () => {

    return (
        <>
            <Header/>
            <Container maxWidth="md">
                <ProjectList/>
            </Container>
        </>
    )
};

export default RootComponent;