// What is Redux?
// The answer to the idea of having some central place where you manage the entire state.
// Redux gives us a certain flow of data, a certain way of managing data that we can then nicely integrate we
// can think about it as a giant JS object.
console.log("- Redux -");
const redux = require('redux');
const createStore = redux.createStore;

// - State -
// To initialize our state we will setup a new constant
const initialState = {
    counter: 0
}

// - Reducer -
// The reducer is strongly connected to the store, it's the only thing that may update the state in the end.
// it receives two arguments, first the current state and second the action
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            // We use the spread operator to copy our state and return a modified copy
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            // We use the spread operator to copy our state and return a modified copy
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// - Store -
// CreateStore as the name suggests allows us to create a new redux store, I'll store it in a constant
// named store
const store = createStore(rootReducer);

// - Subscription -
// To create a subscription we access our store and them we execute our subscribe method 
store.subscribe(
    // subscribe takes an argument, a function which will be executed when ever the state is updated,
    () => {
    console.log('[Subscription]', store.getState());
});

// - Dispatching Action -
// This dispatch function here takes an argument and that argument is an action,  that
// should be a javascript object which needs to have a type property.
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });