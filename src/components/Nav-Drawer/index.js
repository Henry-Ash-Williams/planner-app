import React, { Component } from 'react';
import getDateStr from './getDate';
import './css/css/index.css';
 
class NavDrawer extends Component {
    render() {
        let date = getDateStr();
        console.log(date);
        return ( 
            <div className="Nav-Drawer">
                <div className="Nav-Drawer-Modal">
                    <div className="Nav-Drawer-Modal-Header">
                        <h1>Sunday 22nd July</h1>
                        <h2>3 Tasks</h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavDrawer;
