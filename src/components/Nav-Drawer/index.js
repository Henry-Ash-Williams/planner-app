import React, { Component } from 'react';
import NavDrawerDiv from './styles';
import moment from 'moment';

const date = () => moment().format('dddd Do MMMM YYYY');

class NavDrawer extends Component {
    render() {
        return ( 
            <NavDrawerDiv > 
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
            </NavDrawerDiv>
        );
    }
}



export default NavDrawer;
