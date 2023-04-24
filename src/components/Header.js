import React from "react";

function Header() {
    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="scores">
                <p>Score: 0</p>
                <p>High Score</p>
            </div>
        </header>
    )
}

export default Header;