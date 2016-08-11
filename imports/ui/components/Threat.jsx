import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Threat component - represents a single threat item
export default class Threat extends Component {
  handleExcuse(event)
  {
    Meteor.call('profiles.updateThreat', { userid:Meteor.userId(), threatId:this.props.threat.id, status:"pending", excuse:"test excuse" } );
  }
  render() {
    // Give threats a different className when they are checked off,
    // so that we can style them nicely in CSS
    // const threatClassName = classnames({
    //   status: this.props.threat.status,
    // });


    return (
      <li className="collection-item">
      <div>
          <strong>{this.props.threat.date_time}</strong>: {this.props.threat.location} {this.props.threat.excuse}
          <button data-target="excuse_modal" className="waves-effect waves-light btn right modal-trigger" onClick={this.handleExcuse.bind(this)} >File Excuse</button>  
      </div>
      </li>
    );
  }
}

Threat.propTypes = {
  threat: PropTypes.object.isRequired,
};
