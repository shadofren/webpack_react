require('bootstrap-webpack');
require('jquery');
require('./css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/App.jsx';


ReactDOM.render(<App />, document.getElementById('app'));