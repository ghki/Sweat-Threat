import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Threat from './Threat.jsx';
import ThreatForm from './ThreatForm.jsx'
import { Profiles } from '../../../api/profiles.js'
import { Threats } from '../../../api/threats.js'
import AddThreatModal from './AddThreatModal.jsx'

export default class ThreatTable extends Component {
    constructor(props) {
    super(props);
  }

  renderThreats() {
    return this.props.threats.map((threat) => (
      <Threat key={threat._id} threat={threat} />
    ));
  }
  
  openThreatModal(){
	  $('#addThreatModal').openModal()
  }
  render() {
    return (
      <div className="col s8">
	    <h2 className="header">Your Threats
		<button className="btn modal-trigger" onClick={this.openThreatModal}>+</button>
		</h2>		
		<table>
			<thead>
			  <tr>
          <th>Status</th>
				  <th>Date</th>
				  <th>Location</th>
				  <th>Accountability Partner</th>
			  </tr>
			</thead>
			<tbody>
            {
              this.props.currentUser ? this.renderThreats() : ''
            }
			</tbody>
		</table>
		<AddThreatModal/>
        </div>
    );
  }
}

ThreatTable.propTypes = {
  threats: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  userProfile: PropTypes.object
};

export default createContainer(() => {
  return {
    threats: Threats.find(
	{'userid': Meteor.user()._id }, 
	{ sort: { datetime: 1 } }).fetch(),
	currentUser: Meteor.user(),
  };
}, ThreatTable);