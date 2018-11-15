import React, { Component } from 'react';
// We need to import connect from react-redux in order to connect our component with our Redux state
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// We import all our actions to use them and get an error if we misspelled our actions
import * as  actionTypes from '../../store/actions';

class Counter extends Component {

    mapStrResultHandler(strResult) {
        return (
            // We can call our actions inside as fat arrows and past them parameters
            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
                {strResult.value}
            </li>
        )
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.storedCounter} />
                {/* Here we call our actions inside our const mapDispatchToProps  */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                {/* If we want to send properties as parameters we need to use the fat arrow */}
                <button onClick={() => this.props.onStoreResult(this.props.storedCounter)}>
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map((strResult) => this.mapStrResultHandler(strResult))}
                </ul>
            </div>
        );
    }

}

// Create our const that will receive the props from our redux state
const mapStateToProps = state => {
    return {
        storedCounter: state.counterReducer.counter,
        storedResults: state.resultReducer.results
    };
};

// - Dispatching Action -
// Create our const that will dispatch our actions to our redux state
// This dispatch function here takes an argument and that argument is an action,  that
// should be a javascript object which needs to have a type property.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: { value: 5 } }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: { value: 5 } }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: { result: result } }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
    };
};

// connect is not a wrapping component so we export it like this
export default connect(mapStateToProps, mapDispatchToProps)(Counter);