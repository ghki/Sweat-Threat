import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import ThreatForm from './ThreatForm.jsx';

// AddThreatModal component
export default class AddThreatModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div id="addThreatModal" className="modal">
			<div className="modal-content">
				<ThreatForm />
			</div>
		</div>
    );

  }
}