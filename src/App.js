import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Card from './components/Card/index';
import AddTaskButton from './components/Add-Task-Button/index';
// import AddTaskMenu from './components/Add-Task-Menu/index';

const tasks = [
    {title : 'Computer Science Exam', due: '01/01/17'},
    {title : 'Philosophy Exam', due: '01/01/17'},
    {title : 'Maths Exam', due: '01/01/17'}
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
