import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement("h2", {}, "Hello world"),
    React.createElement(Pizza, {
      name: "The pizza",
      description: "some good pizza",
    }),
    React.createElement(Pizza, {
      name: "The Pizza",
      description: "some good pizza",
    }),
    React.createElement(Pizza, {
      name: "The pizza",
      description: "some good pizza",
    }),
    React.createElement(Pizza, {
      name: "The pizza",
      description: "some good pizza",
    }),
    React.createElement(Pizza, {
      name: "The pizza",
      description: "some good pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
