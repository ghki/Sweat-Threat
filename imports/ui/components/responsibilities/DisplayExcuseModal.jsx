import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// DisplaytExcuseModal component
export default class DisplayExcuseModal extends Component {
  constructor(props) {
    super(props);
  }
  
  closeModal(){
	  $("#displayExcuse" + this.props.responsibility._id).closeModal();
  }
  render() {
    return (
		<div id={"displayExcuse" + this.props.responsibility._id} className="modal">
			<div className="modal-content">
				<h4>{this.props.responsibility.excuse}</h4>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.closeModal.bind(this)}>Accept</a>
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.closeModal.bind(this)}>Veto</a>
			</div>
		</div>
    );
  }
}

DisplayExcuseModal.propTypes = {
  responsibility: PropTypes.object.isRequired,
};