import React from "react";

function Card() {
    const { image, name, cardBg, imageBg } = props;
    const imageAlt = name + ' icon';

    return (
        <div className="card" style={{background: cardBg}}>
            <img src={image} alt={imageAlt} style={{background: imageBg}}/>
            <p>{name}</p>
        </div>
    )
}

export default Card;