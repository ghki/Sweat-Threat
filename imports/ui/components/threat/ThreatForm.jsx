import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Threats } from '../../../api/threats.js';
import Threat from './Threat.jsx';

// ThreatForm component
export default class ThreatForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {

    event.preventDefault();

    // Find the text field via the React ref
    const datetime = ReactDOM.findDOMNode(this.refs.datetime).value.trim();
    const location = ReactDOM.findDOMNode(this.refs.location).value.trim();
	const partner = ReactDOM.findDOMNode(this.refs.partner).value.trim();
	
	Meteor.call(
	'threats.insert', partner, location, datetime, (err, res) => {
	  if (err)
	  {
		 //  if (err.error == "partner-does-not-exist") {
			// alert(err);
		 //  }
	  } else {
		$('#addThreatModal').closeModal();
	  }
	});
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>New Threat</h1>

          { this.props.currentUser ?
            <form className="input-field col s6" onSubmit={this.handleSubmit.bind(this)} >
			   <div className="row">
				<div className="input-field col s12">
				  <input id="partner" type="text" ref="partner" className="validate" required />
				  <label htmlFor="partner">Accountability Partner</label>
				</div>
			  </div>
			  <div className="row">
				  <input
					id="datetime"
					type="date"
					ref="datetime"
					className="datepicker"
					required />
			  </div>
              <div className="row">
				<div className="input-field col s12">
					  <input
						id="threatlocation"
						type="text"
						ref="location"
						className="validate"
						required />
					  <label htmlFor="threatlocation">Location</label>
					  <input className="modal-footer" type="submit" value="Submit"/>
				 </div>
              </div>
            </form> : ''
          }
        </header>
      </div>
    );

  }
}

ThreatForm.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, ThreatForm);
