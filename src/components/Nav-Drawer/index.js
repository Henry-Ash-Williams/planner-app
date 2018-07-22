import React, { Component } from 'react';
import getDateStr from './getDate';
import './css/css/index.css';
 
class NavDrawer extends Component {
    constructor() {
        super(props);
        this.state
    }
    handleClick(message) {
        console.log(message)
    }
    render() {
        let date = getDateStr();
        console.log(date);
        return ( 
            <div className="Nav-Drawer">
                <div className="Nav-Drawer-Modal">
                    <div className="Nav-Drawer-Modal-Header">
                        <button>
                            <i className="material-icons" >
                                clear
                            </i>
                        </button>                        
                        <h1>Sunday 22nd July</h1>
                        <h2>3 Tasks</h2>
                    </div>
                    <div className="Nav-Drawer-Modal-Content">
                        <ul>
                            <li onClick={this.handleClick('Timetable')}>
                            <i className="material-icons">apps</i>
                                <p>My Timetable</p>
                            </li>
                            <li onClick={this.handleClick('Completed Tasks')}>
                                <i className="material-icons">done</i>
                                <p>Finished Tasks</p>
                            </li>
                            <li onClick={this.handleClick('Achievments')}>
                                <i className="material-icons">stars</i>
                                <p>Achievments</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavDrawer;
