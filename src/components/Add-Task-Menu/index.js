import React, { Component } from 'react';
import AddTaskMenuDiv from './styles';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class AddTaskMenu extends Component {
    render() {
        return (
            <AddTaskMenuDiv>
                <button onClick={this.props.onClick}> <i className="material-icons">close</i></button>
                <h1>New Task</h1>
                <form className="Add-Task-Form" id="Add-Task-Form">
                    <p>Title:</p>
                    <input name="Task-Title" type="text" />
                    <p>Set By:</p>
                    <input name="Task-Setter" type="text" />
                    <p>Due Date:</p>
                    <InfiniteCalendar id="InfiniteCalendar" selected={new Date()} theme={{selectionColor: "#FF5252", headerColor: " #2196F3", weekdayColor: "#BBDEFB"}} width={400}/>
                    <p>Information:</p>
                    <textarea form="Add-Task-Form" />
                </form>
            </AddTaskMenuDiv>
        );
    }
}

export default AddTaskMenu;
