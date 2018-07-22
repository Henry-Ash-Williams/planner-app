import React, { Component } from 'react';
import NavDrawer from '../Nav-Drawer/index';
import './css/css/index.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({isHidden: !this.state.isHidden})
    }
    render() {
        return (
            <div className="Navbar">
                <button className="Navbar-Menu-Button" onClick={this.handleClick}>
                    <i className="material-icons">menu</i> 
                </button>
                {this.state.isHidden ? null : <NavDrawer handleClick={this.handleClick} />}
            </div>
        );
    }
}

export default Navbar