import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profiles.js';
import Threat from './Threat.jsx';

// ThreatForm component
export default class ThreatForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {

    event.preventDefault();

    // Find the text field via the React ref
    const date_time = ReactDOM.findDOMNode(this.refs.date_time).value.trim();
    const location = ReactDOM.findDOMNode(this.refs.location).value.trim();

    Meteor.call('profiles.addThreat', { userid:this.props.currentUser._id, date_time:date_time, location:location } );

    $('#modal1').closeModal();

  }

  render() {
      $('.datepicker').pickadate({
        selectYears: 1 
        });
    return (

      <div className="container">
        <header>
          <h1>New Threat</h1>

          { this.props.currentUser ?
            <form className="input-field col s6" onSubmit={this.handleSubmit.bind(this)} >
              <input
                id="datetime"
                type="date"
                ref="date_time"
                className="datepicker"
              />
              <div className="row">
        <div className="input-field col s12">
              <input
                id="threatlocation"
                type="text"
                ref="location"
                className="validate"
              />
              <label htmlFor="threatlocation">Location</label>
              <input className="modal-footer" type="submit" value="Submit"/>
              </div>
              </div>
            </form> : ''
          }
        </header>

        
      </div>
    );

  }
}

ThreatForm.propTypes = {
  //threats: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('threats');

  return {
    currentUser: Meteor.user()
  };
}, ThreatForm);
