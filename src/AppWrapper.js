import React from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Posts from "./pages/posts/posts.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

function AppWrapper(props) {
  const { jobs } = props;
  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <HomePage jobs={jobs} {...props} />}
        />
        <Route
          exact
          path="/posts"
          render={props => <Posts jobs={jobs} {...props} />}
        />
        <Route
          exact
          path="/edit/:id"
          render={props => <Posts jobs={jobs} {...props} />}
        />
      </Switch>
      <Footer />
    </main>
  );
}

export default AppWrapper;
