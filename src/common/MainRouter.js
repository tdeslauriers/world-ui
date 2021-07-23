import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "../views/Gallery";
import Home from "../views/Home";
import Login from "../views/Login";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
