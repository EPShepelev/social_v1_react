import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const rerenderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderDom(store.getState());

store.subscribe(()=> {
  const state = store.getState();
  rerenderDom(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
