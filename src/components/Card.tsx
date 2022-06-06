import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="image-container"> 
                <img src={`./${props.item.image}`}/>
            </div>
            <div className="card-contents">
                <p className="location">{props.item.location}</p>
                <h2>{props.item.title}</h2>
                <p className="visited">Visited: {props.item.visited}</p>
                <p>{props.item.description}</p>
            </div>    
        </div>
    )
}