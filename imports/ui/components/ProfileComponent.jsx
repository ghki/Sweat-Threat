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
            this.props.currentUser ? <LoggedIn userProfile={this.props.currentUser} /> : <LoggedOut/>
          }
      </div>
    );
  }
}

Test.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, Test);