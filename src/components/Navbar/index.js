import React, { Component } from 'react';
import NavDrawer from '../Nav-Drawer/index';
import styled from 'styled-components';
import './css/css/index.css';

const NavbarDiv = styled.div`
    body {
        margin: 0;
        padding: 0;
    }

    .Navbar {
        height: 55px;
        background-color: #2196F3;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .Navbar button {
        border: none;
        cursor: pointer;
        width: 55px;
        height: 55px;
        background-color: transparent;
    }

    .Navbar button .Open-Nav-Drawer {
        width: auto;
        font-size: 30px;
        color: #FFFFFF;
    }

    #Menu-Icon {
        color: #FFFFFF;
    }
`

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
            //<div className="Navbar">
            <NavbarDiv className="Navbar">
                <button id="Open-Nav-Drawer" className="Navbar-Menu-Button" onClick={this.handleClick}>
                    <i id="Menu-Icon" className="material-icons">menu</i> 
                </button>
                {this.state.isHidden ? null : <NavDrawer handleClick={this.handleClick} />}
            </NavbarDiv>
        );
    }
}

export default Navbar