import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const removeMargin = {
    "margin": 0,
    "padding": 0
}

ReactDOM.render(
    <App style={removeMargin}/>,
    document.getElementById('root')
);
registerServiceWorker();
