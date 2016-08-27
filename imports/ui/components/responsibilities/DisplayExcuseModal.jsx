import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Threats } from '../../../api/threats.js';	
import Threat from '../threat/Threat.jsx';

// DisplaytExcuseModal component
export default class DisplayExcuseModal extends Component {
  constructor(props) {
    super(props);
  }
  
  acceptExcuse() {
  	Meteor.call(
	  'threats.setStatus', this.props.responsibility._id, "excused", (err, res) => {
	  if (err) {
		alert(err);
	  }
	  else {
		$("#acceptExcuse" + this.props.responsibility._id).closeModal();
	  }
	});
  }

  vetoExcuse() {
  	Meteor.call(
	  'threats.setStatus', this.props.responsibility._id, "vetoed", (err, res) => {
	  if (err) {
		alert(err);
	  }
	  else {
		$("#vetoExcuse" + this.props.responsibility._id).closeModal();
	  }
	});
  }

  render() {
    return (
		<div id={"displayExcuse" + this.props.responsibility._id} className="modal">
			<div className="modal-content">
				<h4>{this.props.responsibility.excuse}</h4>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.acceptExcuse.bind(this)}>Accept</a>
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.vetoExcuse.bind(this)}>Veto</a>
			</div>
		</div>
    );
  }
}

DisplayExcuseModal.propTypes = {
  responsibility: PropTypes.object.isRequired,
};