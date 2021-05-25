import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import "regenerator-runtime/runtime";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";
import Pet from "./Pet";

const App = () => {
  return (
    // <ErrorBoundary>
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/"></SearchParams>
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
