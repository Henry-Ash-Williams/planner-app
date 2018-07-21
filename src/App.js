import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import NavDrawer from './components/Nav-Drawer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <NavDrawer />
            </div>
        );
    }
}

export default App;
