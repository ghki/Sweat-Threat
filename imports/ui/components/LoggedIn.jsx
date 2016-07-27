import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ThreatTable from './threat/ThreatTable.jsx';
import ResponsibilitiesTable from './responsibilities/ResponsibilitiesTable.jsx';

export default class LoggedIn extends React.Component {
  render() {
    return (
      <div>
          <h2>{this.props.userProfile.profile.name}'s Profile</h2> 
		  <div className="row">
			<ThreatTable />
		  </div>
		  <div className="row">
			<ResponsibilitiesTable />
		  </div>
      </div>
    );
  }
}

LoggedIn.propTypes = {
  userProfile: PropTypes.object
};
