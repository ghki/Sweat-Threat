import React from 'react';
import ThreatForm from './ThreatForm.jsx';

export default class NewThreatModal extends React.Component {
  render() {

    return (
		<div id="modal1" className="modal">
			<div className="modal-content">
				<ThreatForm />
			</div>
		</div>
    );
  }
}