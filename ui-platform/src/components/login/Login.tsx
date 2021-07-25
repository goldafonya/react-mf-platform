import React, {FC} from "react";
import Container from "@material-ui/core/Container";
import {useAuth} from "../../hooks/useAuth";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react";

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

const myTimer = new Timer();

const TimerView = observer(({timer}: { timer: Timer }) => (
    <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
));

const Login: FC = () => {
    const {auth} = useAuth();
    console.log("auth", auth);
    return (
        <Container maxWidth="md">
            Login
            <TimerView timer={myTimer}/>
        </Container>

    );
};

export default Login;