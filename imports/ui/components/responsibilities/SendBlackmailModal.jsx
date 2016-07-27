import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// SendBlackmailModal component
export default class SendBlackmailModal extends Component {
  constructor(props) {
    super(props);
  }

  checkIn(){

  }
  
  closeModal(){
	  $("#sendBlackmail" + this.props.responsibility._id).closeModal();
  }
  render() {
    return (
		<div id={"sendBlackmail" + this.props.responsibility._id} className="modal">
			<div className="modal-content">
				<h4>Are you sure you want to send blackmail?</h4>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.checkIn.bind(this)}>Yes</a>
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.closeModal.bind(this)}>No</a>
			</div>
		</div>
    );
  }
}

SendBlackmailModal.propTypes = {
  responsibility: PropTypes.object.isRequired,
};
