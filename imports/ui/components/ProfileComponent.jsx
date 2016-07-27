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