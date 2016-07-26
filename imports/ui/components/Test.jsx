import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class Test extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('profiles.insert');
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = 'checked';

    return (
        <button className="delete" onClick={this.toggleChecked.bind(this)}>
          BUTTON
        </button>
    );
  }
}