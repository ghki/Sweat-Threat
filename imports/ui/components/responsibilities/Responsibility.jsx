import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import SendBlackmailModal from './SendBlackmailModal'

export default class Responsibility extends Component {

	isOverDue() {
    var now = new Date();
		var ret = now >  new Date(this.props.responsibility.datetime);
		return ret;
	}
  
  sendBlackmail() {
    var modalId = "#sendBlackmail" + this.props.responsibility._id;
    $(modalId).openModal()

  }
  
  render() {
    return (
        <tr>
        <td>{this.props.responsibility.datetime}</td>
        <td>{this.props.responsibility.location}</td>
        <td>{this.props.responsibility.username}</td>
        {
          this.isOverDue() ? 
          <td><a className="waves-effect waves-light btn-large" onClick={this.sendBlackmail.bind(this)}>Overdue</a>
          <SendBlackmailModal responsibility={this.props.responsibility} />
          </td> 
          : ''
        }
        </tr>
    );
  }
}

Responsibility.propTypes = {
  responsibility: PropTypes.object.isRequired,
};
