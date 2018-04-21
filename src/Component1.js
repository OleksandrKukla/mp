import React from "react";

export default ({ message }) =>
    React.createElement(
        "div",
        { className: "component" },
        `Component 1 says: ${message}`
    );
