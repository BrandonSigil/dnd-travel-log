import React from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="logo-container"> 
                <h1> React Travel Log</h1>
            </div>
            <div className="right-nav"> 
                <button type="submit"><a>+ New entry</a></button>
            </div>
        </div>
    )
}