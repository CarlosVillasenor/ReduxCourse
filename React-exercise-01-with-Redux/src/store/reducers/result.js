// actionTypes is now a JS object wich has our action properties, the huge advantage of this approach simply
// is we're now importing our constants here and if we mistype one constant name, we'll actually get an error
// by our IDE
import * as actionTypes from '../actions';

// - State -
// To initialize our state we will setup a new constant
const initialState = {
    results: []
};

// - Reducer -
// The reducer is strongly connected to the store, it's the only thing that may update the state in the end.
// it receives two arguments, first the current state and second the action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // we need tu use concat instead of push or unshift because we want to add and item immutably
                results: state.results.concat({ id: new Date(),value: action.payload.result})
            }
        case actionTypes.DELETE_RESULT:
            // since we are copying our old array we never mutate our array in our state
            // const newArray = [...state.results];
            // newArray.splice(id,1);
            const updatedArray = state.results.filter( result => result.id !== action.resultElId  );
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
};

export default reducer;