import React, { Component } from 'react';
import NavDrawer from '../Nav-Drawer/index';
import './css/css/index.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isHidden : true}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState.isHidden = !this.setState.isHidden
    }
    render() {
        return (
            <div className="Navbar">
                <button className="Navbar-Menu-Button" onClick={this.toggle()}>
                    <i className="material-icons">menu</i> 
                </button>
                {this.state.NavDrawerIsHidden ?  null : <NavDrawer />}
            </div>
        );
    }
}

export default Navbar