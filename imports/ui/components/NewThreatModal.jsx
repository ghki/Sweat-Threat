import React from 'react';

export default class NewThreatModal extends React.Component {
  render() {

    return (
		<div id="modal1" className="modal">
			<div className="modal-content">
				<h4>Threat</h4>
				<p>LIVE IN FEAR</p>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
			</div>
		</div>
    );
  }
}