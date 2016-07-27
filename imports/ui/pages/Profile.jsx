import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ThreatTable from '../components/threat/ThreatTable.jsx';
import ProfileComponent from '../components/ProfileComponent.jsx';
import { Profiles } from '../../api/profiles.js';


// shows option to add accountability partner

export default class Profile extends React.Component {
	render() {
		$(document).ready(function(){
    		$('.modal-trigger').leanModal();
  		});
		return (
			<div>
				<ProfileComponent />
			</div>
		);
	}
}

