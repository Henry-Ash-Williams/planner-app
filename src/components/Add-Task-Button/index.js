import React, { Component } from 'react';
import AddTaskMenu from '../Add-Task-Menu/index';
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
                {this.state.clicked ? <AddTaskMenu onClick={this.handleClick}/> : null}
            </AddTaskButtonDiv>
        );
    }
}
export default AddTaskButton;
