import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md">
                    <Typography variant="h6">
                        Список проектов
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
};