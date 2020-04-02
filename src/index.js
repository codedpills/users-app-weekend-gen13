import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import createStore
import { createStore } from "redux";
// import Provider
import { Provider } from "react-redux";
// import our reducer
import usersReducer from "./store/usersReducer";

// create our store by passing in our reducer
const store = createStore(usersReducer);

ReactDOM.render(
  // Wrap our App with Provider from redux
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
