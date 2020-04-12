import React from "react";

const username = props => (
    <h4 className="bg-success text-white text-center p-2">{props.github}</h4>
);

username.defaultProps = {
    github: "rafi-linux/rafi-windows"
};

export default username;