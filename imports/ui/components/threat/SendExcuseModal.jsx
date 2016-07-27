import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import ThreatForm from './ThreatForm.jsx';

// CheckInModal component
export default class SendExcuseModal extends Component {
  constructor(props) {
    super(props);
  }

   handleSubmit(event) {

    event.preventDefault();

    // Find the text field via the React ref
    const excuse = ReactDOM.findDOMNode(this.refs.excuse).value.trim();
	
	Meteor.call(
	'threats.setExcuse', this.props.threat._id, excuse, (err, res) => {
	  if (err)
	  {
		alert(err);
	  }else {
		$('#sendExcuse' + this.props.threat._id).closeModal();
	  }
	});
	Meteor.call('threats.setStatus', this.props.threat._id, "pending");
  }
  
  render() {
    return (
		<div id={"sendExcuse" + this.props.threat._id} className="modal">
			<div className="modal-content">
				<div className="container">
					<header>
					  <h2>Send Excuse</h2>
					  <h4>Accountability Partner: {this.props.threat.partner_username}</h4>
					  <h4>Location: {this.props.threat.location}</h4>
					  <h4>Time: {this.props.threat.datetime}</h4>
						<form className="col s12" onSubmit={this.handleSubmit.bind(this)} >
						  <div className="row">
							<div className="input-field col s12">
							  <textarea id="textarea1" ref="excuse" className="materialize-textarea"></textarea>
							  <label htmlFor="textarea1">Textarea</label>
							</div>
						  </div>
						  <input className="modal-footer" type="submit" value="Submit"/>
						</form>
					</header>
				</div>
			</div>
		</div>
    );
  }
}

SendExcuseModal.propTypes = {
  threat: PropTypes.object.isRequired,
};
