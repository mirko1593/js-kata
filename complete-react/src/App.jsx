import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(React.createElement(App));

// return React.createElement("div", {}, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
// ]);
