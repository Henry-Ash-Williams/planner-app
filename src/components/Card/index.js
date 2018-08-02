import React, { Component } from 'react';
import './css/css/index.css';

class Card extends Component {
    render() {
        return ( 
            <div className="Card">
                <h1>Today</h1>
                <ul>
                    {this.props.tasks.map(i => <li>{i.title}</li>)}
                </ul>
            </div>
        );
    }
};  
export default Card;

