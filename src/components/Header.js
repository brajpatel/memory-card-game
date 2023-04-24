import React from "react";

function Header(props) {
    const { score, highScore } = props;

    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className="scores">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
            <a className="github-link" href="https://github.com/brajpatel" target="_blank"><i className="fa-brands fa-github"></i></a>
        </header>
    )
}

export default Header;