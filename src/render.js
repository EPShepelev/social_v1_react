import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { addPost } from "./redux/state";

export const rerenderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
