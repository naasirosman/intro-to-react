import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
    return React.createElement(
        "div",
        { id: "header" },
        [React.createElement("h1", { id: "brand" }, "Adopt Me!"),  // everytime app us called it creates div of id "header" and inside of it h1 of id "brand" saying "Adopt me"
        React.createElement(Pet, {
            name: "Gary",
            animal: "Cat",
            breed: "Orange"
        }),
        React.createElement(Pet, {
            name: "Penelope",
            animal: "Cat",
            breed: "Grey"
        }),
        React.createElement(Pet, {
            name: "Biscuit",
            animal: "Dog",
            breed: "Husky"
 })]
    );

};

ReactDOM.render(React.createElement(App), document.getElementById("root")); // tells DOM where to put it