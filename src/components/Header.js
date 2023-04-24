import React from "react";

function Header() {
    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="scores">
                <p>Score: 0</p>
                <p>High Score</p>
            </div>
            <a href="https://github.com/brajpatel" target="_blank"><i class="fa-brands fa-github"></i></a>
        </header>
    )
}

export default Header;