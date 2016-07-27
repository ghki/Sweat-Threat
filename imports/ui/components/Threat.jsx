import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Threat component - represents a single threat item
export default class Threat extends Component {

  render() {
    // Give threats a different className when they are checked off,
    // so that we can style them nicely in CSS
    // const threatClassName = classnames({
    //   status: this.props.threat.status,
    // });

    return (
      <li className="collection-item">
      <div>
          <strong>{this.props.threat.date_time}</strong>: {this.props.threat.place}
      </div>
      </li>
    );
  }
}

Threat.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  threat: PropTypes.object.isRequired,
};
