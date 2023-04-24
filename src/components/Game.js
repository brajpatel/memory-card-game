import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import Header from "./Header";
import Card from "./Card";
import angular from "../assets/angular.png";
import cPlusPlus from "../assets/c-plus-plus.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodeJs from "../assets/node-js.png";
import python from "../assets/python.png";
import reactJs from "../assets/react.png";
import ruby from "../assets/ruby.png";

const allCards = [
    {
        image: angular,
        name: 'Angular',
        cardBg: 'rgb(185, 35, 30)',
        imageBg: 'rgb(243, 163, 160)'
    },
    {
        image: cPlusPlus,
        name: 'C++',
        cardBg: 'rgb(21, 51, 90)',
        imageBg: 'rgb(81, 114, 158)'
    },
    {
        image: css,
        name: 'CSS',
        cardBg: 'rgb(55, 123, 201)',
        imageBg: 'rgb(145, 185, 238)'
    },
        {
        image: github,
        name: 'GitHub',
        cardBg: 'rgb(29, 29, 29)',
        imageBg: 'rgb(255, 255, 255)'
    },
    {
        image: html,
        name: 'HTML',
        cardBg: 'rgb(223, 67, 28)',
        imageBg: 'rgb(255, 202, 189)'
    },
    {
        image: java,
        name: 'Java',
        cardBg: 'rgb(223, 37, 37)',
        imageBg: 'rgb(200, 211, 248)'
    },
        {
        image: javascript,
        name: 'JavaScript',
        cardBg: 'rgb(255, 229, 33)',
        imageBg: 'rgb(248, 241, 191)'
    },
    {
        image: mongodb,
        name: 'MongoDB',
        cardBg: 'rgb(41, 148, 41)',
        imageBg: 'rgb(175, 238, 175)'
    },
    {
        image: nodeJs,
        name: 'Node JS',
        cardBg: 'rgb(126, 194, 16)',
        imageBg: 'rgb(234, 255, 200)'
    },
    {
        image: python,
        name: 'Python',
        cardBg: 'rgb(248, 212, 52)',
        imageBg: 'rgb(221, 228, 241)'
    },
    {
        image: reactJs,
        name: 'React',
        cardBg: 'rgb(53, 187, 221)',
        imageBg: 'rgb(228, 250, 255)'
    },
    {
        image: ruby,
        name: 'Ruby',
        cardBg: 'rgb(143, 0, 0)',
        imageBg: 'rgb(255, 185, 185)'
    }
];

function Game() {
    const [cards, setCards] = useState(allCards);
    const [chosenCards, setChosenCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {

    })

    return (
        <div>
            <Header/>
            <div className="game">
                {cards.map((card) => {
                    return (
                        <Card
                        key={uniqid()}
                        image={card.image}
                        name={card.name}
                        cardBg={card.cardBg}
                        imageBg={card.imageBg}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Game;