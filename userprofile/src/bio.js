import React from "react";

const bio = props => (
    <h4 className="bg-success text-white text-left p-2">
        <ul>
            <li>{props.name}</li>
            <li>{props.placeDateofBirth}</li>
            <li>{props.nationality}</li>
            <li>{props.maritalStatus}</li>
        </ul>
    </h4>
);
bio.defaultProps = {
    title: "----- Bio -----",
    name: "Moch Rafi Nur Oktafian",
    placeDateofBirth: "Bandung, 08 Oktober 1997",
    nationality: "Indonesia",
    maritalStatus: "Single"
};

export default bio;