import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login.js";
import Main from "./pages/main";
export default function routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}
