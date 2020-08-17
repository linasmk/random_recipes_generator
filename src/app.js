/* ========= App Dependencies ============= */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
/* =========== Redux ================== */
import configureStore from "./store/configureStore";
/* =========== Redux ================== */
import AppRouter from "./routers/AppRouter";
/* ========== Styles and Components ========== */
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById("app"));