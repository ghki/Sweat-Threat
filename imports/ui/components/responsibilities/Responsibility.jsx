import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import SendBlackmailModal from './SendBlackmailModal';
import DisplayExcuseModal from './DisplayExcuseModal';

export default class Responsibility extends Component {

	containsExcuse() {
    return this.props.responsibility.status == "pending";
  }

  isOverDue() {
    var now = new Date();
		var ret = now > new Date(this.props.responsibility.datetime);
		return ret;
	}
  
  sendBlackmail() {
    var modalId = "#sendBlackmail" + this.props.responsibility._id;
    $(modalId).openModal()

  }

  displayExcuse() {
    var modalId = "#displayExcuse" + this.props.responsibility._id;
    $(modalId).openModal();
    // console.log(this.props.responsibility.excuse);
  }
  
  render() {
    return (
        <tr>
        <td>{this.props.responsibility.datetime}</td>
        <td>{this.props.responsibility.location}</td>
        <td>{this.props.responsibility.username}</td>
        {
          this.containsExcuse() ?
          <td>
          <i className="material-icons" onClick={this.displayExcuse.bind(this)}>message</i>
          <DisplayExcuseModal responsibility={this.props.responsibility} />
          </td>
          : ''
        }
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
