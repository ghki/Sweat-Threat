import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profiles.js';

// Task component - represents a single todo item
export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  toggleChecked() {
  }

  render() {
    return (
      <div>
          {
            this.props.currentUser ?
            <h2>{this.props.currentUser.username}'s Profile ({this.props.currentUser._id})</h2> : 
            <h2>You are not currently logged in. Please log in to view your profile.</h2>
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
    userProfile: Profiles.findOne({username: "danho"}),
    currentUser: Meteor.user()
  };
}, Test);