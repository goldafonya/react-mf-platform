import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import {useLocation} from "@reach/router";
import ProjectService from "../services/ProjectService";

export const Header = () => {
    const loc = useLocation();
    const projects = ProjectService.getProjectList();
    const project = projects.find(p => p.url === loc.pathname);
    const header = project ? project.title : "Список проектов";

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md">
                    <Typography variant="h6">
                        {header}
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
};