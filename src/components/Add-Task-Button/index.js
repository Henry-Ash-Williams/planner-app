import React, { Component } from 'react';
import AddTaskButtonDiv from './styles';

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
            <AddTaskButtonDiv>
                <button className="Add-Task-Button" onClick={this.handleClick}>
                    <i className="material-icons">add</i>
                </button>
            </AddTaskButtonDiv>
        );
    }
}
export default AddTaskButton;
