import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Axios_app from "./Axios_app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <Axios_app></Axios_app> */}
    </React.StrictMode>
);

reportWebVitals();
