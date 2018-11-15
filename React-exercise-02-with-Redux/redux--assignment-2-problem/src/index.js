import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux 
// combineReducers
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// Import our reducers from our reducer file
import reducer from './store/reducer';

/* const rootReducer = combineReducers({
    reducer:reducer
}); */

// - Store -
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
