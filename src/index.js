import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const removeMargin = { "margin":0, "padding":0, "box-sizing": "border-box" }
    


import registerServiceWorker from './registerServiceWorker'; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
