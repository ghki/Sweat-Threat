import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// CheckInModal component
export default class CheckInModal extends Component {
  constructor(props) {
    super(props);
  }
  
  checkIn(){
	Meteor.call(
	'threats.setStatus', this.props.threat._id, "success", (err, res) => {
	  if (err)
	  {
		alert(err);
	  }else {
		$('#checkIn' + this.props.threat._id).closeModal();
	  }
	});
  }
  
  closeModal(){
	  $("#checkIn" + this.props.threat._id).closeModal();
  }

  render() {
    return (
		<div id={"checkIn" + this.props.threat._id} className="modal">
			<div className="modal-content">
				<h4>Are you sure you want to check in?</h4>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.checkIn.bind(this)}>Yes</a>
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.closeModal.bind(this)}>No</a>
			</div>
		</div>
    );

  }
}

CheckInModal.propTypes = {
  threat: PropTypes.object.isRequired,
};
