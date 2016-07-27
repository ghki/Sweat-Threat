import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profiles.js';
import ReactDOM from 'react-dom';
import LoggedOut from './LoggedOut.jsx'
import LoggedIn from './LoggedIn.jsx'

// Task component - represents a single todo item
export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    
    Profiles.update("DXq9aea8SkcnWxCGM", { $set: { accountabilityPartner: text} });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div>
          {
            this.props.userProfile ? <LoggedIn userProfile={this.props.userProfile} /> : <LoggedOut/>
          }
      </div>
    );
  }
}

Test.propTypes = {
  userProfile: PropTypes.object,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    userProfile: Profiles.findOne({userid: Meteor.userId()}),
    currentUser: Meteor.user()
  };
}, Test);