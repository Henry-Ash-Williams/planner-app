import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Card from './components/Card/index';
import AddTaskButton from './components/Add-Task-Button/index';

const tasks = [
    {title : 'Computer Science Exam'},
    {title : 'Philosophy Exam'},
    {title : 'Maths Exam'}
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Card tasks={tasks} />
                <AddTaskButton />
            </div>
        );
    }
}

export default App;
