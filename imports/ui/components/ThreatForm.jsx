import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Profiles } from '../../api/profiles.js';

import Threat from './Threat.jsx';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

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

    console.log(date_time);
    console.log(location);

    const threatObject = {
      date_time,
      location
    };

    Meteor.call('profiles.addThreat', { username:this.props.currentUser.username, threat:threatObject } );

    // Clear form
   // ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderThreats() {
    return (
      <Profiles
        key={threat.threatId}
        threat={threat}
      />
    );
  };
  

  render() {
    return (
      <div className="container">
        <header>
          <h1>New Threat</h1>

          <AccountsUIWrapper />

          { this.props.currentUser ?
            <form className="new-threat" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="date_time"
                placeholder="Add a date and time"
              />
              <input
                type="text"
                ref="location"
                placeholder="Add a place"
              />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderThreats()}
        </ul>
      </div>
    );
  }
}

ThreatForm.propTypes = {
  threats: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

// export default createContainer(() => {
//   Meteor.subscribe('threats');

//   return {
//     threats: Threats.find({}, { sort: { createdAt: -1 } }).fetch(),
//     currentUser: Meteor.user(),
//   };
// }, ThreatForm);
