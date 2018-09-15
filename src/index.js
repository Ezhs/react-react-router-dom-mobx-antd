require('normalize.css/normalize.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';

import store from './stores/index.js';

// Render the main component into the dom
ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('app'));
