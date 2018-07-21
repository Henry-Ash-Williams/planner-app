import React, { Component } from 'react';
import getDateStr from './getDate';
import './css/css/index.css';
 
class NavDrawer extends Component {
    render() {
        let date = getDateStr();
        return ( 
            <div className="Nav-Drawer">
                <div className="Nav-Drawer-Modal">
                    <header>
                        <h1>{this.date}</h1>
                        {/* TODO: Add Task Counter */}
                    </header>
                </div>
            </div>
        );
    }
}
export default NavDrawer;
