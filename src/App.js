import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/index';
import Card from './components/Card/index';
import AddTaskButton from './components/Add-Task-Button/index';
// import AddTaskMenu from './components/Add-Task-Menu/index';

const tasks = [
    {title : 'Computer Science Exam', due: '01/01/17'},
    {title : 'Philosophy Exam', due: '01/01/17'},
    {title : 'Maths Exam', due: '01/01/17'}
];

const AppDiv = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

class App extends Component {
    render() {
        return (
            <AppDiv>
                <Navbar />
                <Card tasks={tasks} />
                <AddTaskButton />
            </AppDiv>
        );
    }
}

export default App;
