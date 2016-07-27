import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import SendExcuseModal from './SendExcuseModal'
import CheckInModal from './CheckInModal'

// Threat component - represents a single threat item
export default class Threat extends Component {
  constructor(props) {
    super(props);
  }
  
  clickSendExcuse()
  {
    var modalId = "#sendExcuse" + this.props.threat._id;
    $(modalId).openModal()
  }
  
  clickCheckIn()
  {
    var modalId = "#checkIn" + this.props.threat._id;
    $(modalId).openModal()
  }
  
  render() {
    return (
		  <tr>
        <td>{this.props.threat.status}</td>
        <td>{this.props.threat.datetime}</td>
        <td>{this.props.threat.location}</td>
        <td>{this.props.threat.partner_username}</td>
        <td>
        <div>
        {
          this.props.threat.status == 'active' 
          ? <a className="waves-effect waves-light btn" onClick={this.clickSendExcuse.bind(this)}>Send Excuse</a> 
          : ''
        }
        {	
          this.props.threat.status == 'active'
          ? <a className="waves-effect waves-light btn" onClick={this.clickCheckIn.bind(this)}>Check In</a>
          : ''
        }
        </div>
        <SendExcuseModal threat={this.props.threat} />
        <CheckInModal threat={this.props.threat}/>
        </td>
		  </tr>
    );
  }
}

Threat.propTypes = {
  threat: PropTypes.object.isRequired,
};
