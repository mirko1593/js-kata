import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path={`/details/:id`} element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);

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
