// actionTypes is now a JS object wich has our action properties, the huge advantage of this approach simply
// is we're now importing our constants here and if we mistype one constant name, we'll actually get an error
// by our IDE
import * as actionTypes from '../actions';

// - State -
// To initialize our state we will setup a new constant
const initialState = {
    counter: 0
};

// - Reducer -
// The reducer is strongly connected to the store, it's the only thing that may update the state in the end.
// it receives two arguments, first the current state and second the action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                // This simply tells javascript return a javascript object, take all the properties and values of
                // the state argument which is our old state, distribute these properties with their values in 
                // this new object and then since we define an additional property, add this property to the 
                // object or if it already was present due to us distributing the old state as it would be for the
                // counter, this is part of the old state, overwrite this but only this, leave results untouched.
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        default:
            return state;
    }
};

export default reducer;