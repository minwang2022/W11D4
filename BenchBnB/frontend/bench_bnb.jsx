import React from "react";
import ReactDOM from "react-dom";
// import Root from './components/root';
import { login } from "./util/session_api_util"
document.addEventListener("DOMContentLoaded", () => {

  window.login = login;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});