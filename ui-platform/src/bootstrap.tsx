import "fontsource-roboto/latin.css";
import React from "react";
import ReactDOM from "react-dom";
import RootComponent from "./RootComponent";

ReactDOM.render(
    <RootComponent />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./RootComponent', () => {
        const RootComponent = require('./RootComponent').RootComponent;
        ReactDOM.render(<RootComponent />, document.getElementById('root'));
    })
}