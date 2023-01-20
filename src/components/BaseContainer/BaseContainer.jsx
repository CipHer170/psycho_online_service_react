import React from 'react';
import "./BaseContainer.scss";

export default function BaseContainer({children, className}) {
    return (
        <div className={`${className ? className : ""} base-container`}>{children}</div>
    )
}

