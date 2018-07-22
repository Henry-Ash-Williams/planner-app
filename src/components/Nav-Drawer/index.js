import React, { Component } from 'react';
import date from './getDate';
import './css/css/index.css';
 
class NavDrawer extends Component {
    render() {
        return ( 
            <div className="Nav-Drawer">
                <div className="Nav-Drawer-Modal">
                    <div className="Nav-Drawer-Modal-Header">
                        <button id="Close-Nav-Drawer" onClick={this.props.handleClick}>
                            <i className="material-icons">clear</i>
                        </button>                        
                        <h1>{date()}</h1>
                        <h2>3 Tasks</h2>
                    </div>
                    <div className="Nav-Drawer-Modal-Content">
                        <ul>
                            <li>
                                <i className="material-icons">apps</i>
                                <p>My Timetable</p>
                            </li>
                            <li>
                                <i className="material-icons">done</i>
                                <p>Finished Tasks</p>
                            </li>
                            <li>
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
