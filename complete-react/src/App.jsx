import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breed: "Havanese",
        }),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breed: "Havanese",
        }),
        React.createElement(Pet, {
            animal: "Dog",
            name: "Luna",
            breed: "Havanese",
        }),
    ]);
};

const root = createRoot(document.getElementById("root"));

root.render(React.createElement(App));
