import React from "react";

export const Button = (props) => {
    return (
        <>
            <button className="btn">
                {props.value}
            </button>
        </>
    )
}