import React, { Component } from 'react';
import './css/css/index.css';
 
class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState.clicked = !this.setState.clicked;
        console.log(this.setState.clicked);
    }
    render() {
        return ( 
            <div className="Add-Task-Button" onClick={this.handleClick()}>
                <i class="material-icons">add</i>
            </div>
        );
    }
}
export default AddTaskButton;
