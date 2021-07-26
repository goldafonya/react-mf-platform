import React, {FC} from "react";
import Container from "@material-ui/core/Container";
import {useAuth} from "../../hooks/useAuth";

const Login: FC = () => {
    const {auth} = useAuth();
    console.log("auth", auth);
    return (
        <Container maxWidth="md">
            Login
        </Container>

    );
};

export default Login;