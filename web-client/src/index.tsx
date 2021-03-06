import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import getConfiguredStore from "store/getConfiguredStore";
import App from "views/App";

import * as serviceWorker from "./serviceWorker";

const store = getConfiguredStore();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.VERSION = process.env.REACT_APP_VERSION;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
