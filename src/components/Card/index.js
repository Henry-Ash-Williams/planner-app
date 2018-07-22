import React, { Component } from 'react';
import './css/css/index.css';

const tasks = [
    {title : 'Computer Science Exam'},
    {title : 'Philosophy Exam'},
    {title : 'Maths Exam'}
];

class Card extends Component {
    render() {
        return ( 
            <div className="Card">
                <h1>Today</h1>
                <ul>
                    {tasks.map(i => <li>{i.title}</li>)}
                </ul>
            </div>
        );
    }
}
export default Card;
