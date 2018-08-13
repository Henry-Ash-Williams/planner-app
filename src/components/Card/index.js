import React from 'react';
import CardDiv from './styles';



const Card = (props) => {
    return (
        <CardDiv>
            <h1>Today</h1>
            <ul>
                {props.tasks.map((content, index) => <li key={index}>{content.title}</li>)}
            </ul>
        </CardDiv>
    )
}

export default Card;

