import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => (
    <Container maxWidth="md">
        <Grid justify="center" container>
            <CircularProgress/>
        </Grid>
    </Container>
);

export default Loader;