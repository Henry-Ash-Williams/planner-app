import React, { Component } from 'react';

class AddTaskMenu extends Component {
    render() {
        return ( 
            <div className="Add-Task-Menu">
                <button onClick={this.props.onClick}> <i class="material-icons">close</i></button>
                <h1>New Task</h1>
                <form className="Add-Task-Form" id="Add-Task-Form">
                    <p>Title:</p>
                    <input name="Task-Title" type="text" />
                    <p>Set By:</p>
                    <input name="Task-Setter" type="text" />
                    <p>Due Date:</p>
                    <input name="Task-Due" type="date"/>
                    <p>Information:</p>
                    <textarea form="Add-Task-Form" />
                </form>
            </div>
        );
    }
}

export default AddTaskMenu;
