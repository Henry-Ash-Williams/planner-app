import React, { Component } from 'react';
import './css/css/index.css';
 
class NavDrawer extends Component {
    render() {
        if (!this.props.hidden) {
            return ( 
                <div className="Nav-Drawer">
                    <div className="Nav-Drawer-Modal">
                        <div className="Nav-Drawer-Modal-Header">
                            <button onClick={console.log("Exiting")}>
                                <i className="material-icons" >
                                    clear
                                </i>
                            </button>                        
                            <h1>Sunday 22nd July</h1>
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
        } else {
            return null
        }
        
    }
}

export default NavDrawer;
