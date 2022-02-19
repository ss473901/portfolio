import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { User } from "./components/pages/User";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/user" component={User} />
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
