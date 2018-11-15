import React from 'react';
import ReactDOM from 'react-dom';
// Before using Redux we need to install react and react-redux in our app with:
// npm install --save redux react-redux
// To create our store we need to import createStore from redux
// To combine our reducers we need to import combineReducers from redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Import our reducers from our reducer file
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    counterReducer:counterReducer,
    resultReducer:resultReducer
});

// - Store -
// CreateStore as the name suggests allows us to create a new redux store, I'll store it in a constant
// named store
const store = createStore(rootReducer);

// Provider is a helper component which allows us to kind of inject our store into the react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
