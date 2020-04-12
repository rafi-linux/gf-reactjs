import React from "react";

const greetings = props => (
    <h4 className="bg-success text-white text-center p-2">
        {props.name}{"_"}
        {props.age}{"_"}
        {props.gender}
    </h4 >
);

greetings.defaultProps = {
    name: "Moch Rafi Nur Oktafian",
    age: "22",
    gender: "Male"
};

export default greetings