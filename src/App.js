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

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/planner-app';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully");

  db.close();
});

export default App;
