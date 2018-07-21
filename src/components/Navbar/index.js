import React, { Component } from 'react';
import './css/css/index.css';

class Navbar extends Component {
    handleClick() {
        console.log('Button Clicked');
    }
    render() {
        return (
            <div className="Navbar">
                <button className="Navbar-Menu-Button" onClick={this.handleClick()}>
                    <i className="material-icons">menu</i> 
                </button>
            </div>
        )
        
    }
}

export default Navbar