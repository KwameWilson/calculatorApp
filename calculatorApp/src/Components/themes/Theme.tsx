import React from "react";

export const Theme = () => {
    return (
        <>
            <div className="theme-wrapper">
                <div className="theme-indicator">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>

                <div className="toggle-grid">
                    <label htmlFor="toggle">Theme</label>
                    <div className="toggle">
                        <input type="radio" name="toggle" id="toggle" />
                        <label htmlFor="toggle"></label>
                    </div>
                </div>
            </div>
        </>
    )
}