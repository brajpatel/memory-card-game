import React from "react";

function Card(props) {
    const { updateScore, image, name, cardBg, imageBg } = props;
    const imageAlt = name + ' icon';

    return (
        <div className="card" onClick={() => updateScore(name)} style={{background: cardBg}}>
            <img src={image} alt={imageAlt} style={{background: imageBg}}/>
            <p>{name}</p>
        </div>
    )
}

export default Card;