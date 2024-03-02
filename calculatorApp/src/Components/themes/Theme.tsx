import React from "react";

export const Theme = () => {
    return (
        <>
            <div className="theme-wrapper">
                <div className="theme-indicator">
                    <label className="mode1" htmlFor="toggle"><p>1</p></label>
                    <label className="mode2" htmlFor="toggle"><p>2</p></label>
                    <label className="mode3" htmlFor="toggle"><p>3</p></label>
                </div>

                <div className="toggle-flex">
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