import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Threat from './Threat.jsx';
import NewThreatModal from './NewThreatModal.jsx'
import { Profiles } from '../../api/profiles.js'
import ExcuseModal from './ExcuseModal.jsx';

export default class ThreatTable extends Component {
    constructor(props) {
    super(props);
  }

  getThreats() {
    return this.props.userProfile.threats;
  }

  renderThreats() {
    return this.getThreats().map((threat) => (
      <Threat key={threat.threatId} threat={threat} />

    ));
  }

  render() {
    return (
      <div>
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>My Threats <button data-target="modal1" className="btn modal-trigger">+</button></h4>
            </li>
            {
              this.props.userProfile ? this.renderThreats() : ''
            }
          </ul>

        </div>
        <ExcuseModal/>
        <NewThreatModal />
        </div>
    );
  }
}

ThreatTable.propTypes = {
  userProfile: PropTypes.object
};

export default createContainer(() => {
  return {
    userProfile: Profiles.findOne({userid:Meteor.userId()})
  };
}, ThreatTable);