import React, { Component } from 'react';
import './css/css/index.css';
 
class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
        console.log(this.state.clicked);
    }

    render() {
        return ( 
            <div className="Add-Task">
                <button className="Add-Task-Button" onClick={this.handleClick}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        );
    }
}
export default AddTaskButton;
