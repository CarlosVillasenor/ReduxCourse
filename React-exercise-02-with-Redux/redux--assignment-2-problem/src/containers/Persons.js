import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.personsState.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsState: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, payload: { name: name, age: age } }),
        onRemovedPerson: (id) => dispatch({ type: actionTypes.REMOVE_PERSON, payload: { personId: id } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);