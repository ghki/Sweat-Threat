import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Threat component - represents a single threat item
export default class Threat extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('threats.setChecked', this.props.threat._id, !this.props.threat.checked);
  }

  deleteThisThreat() {
    Meteor.call('threats.remove', this.props.threat._id);
  }

  togglePrivate() {
    Meteor.call('threats.setPrivate', this.props.threat._id, ! this.props.threat.private);
  }

  render() {
    // Give threats a different className when they are checked off,
    // so that we can style them nicely in CSS
    const threatClassName = classnames({
      checked: this.props.threat.checked,
      private: this.props.threat.private,
    });

    return (
      <li className={threatClassName}>
        <button className="delete" onClick={this.deleteThisThreat.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.threat.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.threat.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="text">
          <strong>{this.props.threat.username}</strong>: {this.props.threat.text}
        </span>
      </li>
    );
  }
}

Threat.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  threat: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
};
