import React, { Component } from 'react';
import NavDrawer from '../Nav-Drawer/index';
import './css/css/index.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({opacity: 1}, () => setTimeout(() => this.setState({opacity:0}),400))
        this.setState({isHidden: !this.state.isHidden})
    }
    render() {
        return (
            <div className="Navbar">
                <button id="Open-Nav-Drawer" className="Navbar-Menu-Button" onClick={this.handleClick}>
                    <i id="Menu-Icon" className="material-icons">menu</i> 
                </button>
                {this.state.isHidden ? null : <NavDrawer content="heck" handleClick={this.handleClick} />}
            </div>
        );
    }
}

export default Navbar