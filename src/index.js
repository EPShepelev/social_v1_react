import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

import store from "./redux/state";

const rerenderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderDom(store.getState());
store.subscribe(rerenderDom);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
