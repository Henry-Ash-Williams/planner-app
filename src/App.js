import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Card from './components/Card/index'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Card />
            </div>
        );
    }
}

export default App;
