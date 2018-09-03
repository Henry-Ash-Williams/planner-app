import React, { Component } from 'react';
import AddTaskMenuDiv from './styles';
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';

class AddTaskMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const { date } = this.state
        return (
            <AddTaskMenuDiv>
                <button onClick={this.props.onClick}> <i className="material-icons">close</i></button>
                <h1>New Task</h1>
                <form className="Add-Task-Form" id="Add-Task-Form" method="post">
                    <p>Title:</p>
                    <input name="Task-Title" type="text" />
                    <p>Set By:</p>
                    <input name="Task-Setter" type="text" />
                    <p>Due Date:</p>
                    <div className="InfiniteCalendar">
                        {/* <InfiniteCalendar 
                            selected={new Date()} 
                            theme={{selectionColor: "#FF5252", headerColor: " #2196F3", weekdayColor: "#BBDEFB"}} 
                            width={400}
                            height={200}
                            onSelect={}   
                        /> */}
                        <Flatpickr 
                            value={date}
                            onChange={date => this.setState({date})}
                            defaultValue={new Date()}
                        />
                    </div>
                </form>
                <input type="submit" onSubmit={this.props.onClick}></input>
            </AddTaskMenuDiv>
        );
    }
}

export default AddTaskMenu;
