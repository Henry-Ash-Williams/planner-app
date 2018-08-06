import React from 'react';
import './css/css/index.css';

const Card = (props) => {
    return (
        <div className="Card">
            <h1>Today</h1>
            <ul>
                {props.tasks.map((content, index) => <li key={index}>{content.title}</li>)}
            </ul>
        </div>
    )
}

export default Card;

