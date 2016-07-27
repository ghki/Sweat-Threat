import React from 'react';
import classNames from 'classnames';
import Threat from '../components/Threat.jsx';
import NewThreatModal from '../components/NewThreatModal.jsx';

// shows option to add accountability partner

export default class Profile extends React.Component {
	getThreats() {
		return [
			{ 
				threatId: 1,
				date_time: "07-26-2016 11:00AM",
				place: "Gold's Gym",
				checkedIn: false,
				excuse: "",
				status: "active"
			},
			{ 
				threatId: 2,
				date_time: "07-26-2016 12:00PM",
				place: "Lifetime Fitness",
				checkedIn: false,
				excuse: "",
				status: "pending"
			},
			{ 
				threatId: 3,
				date_time: "07-26-2016 01:00PM",
				place: "Pro Club",
				checkedIn: false,
				excuse: "",
				status: "fail"
			},
		];
	}

	renderThreats() {
		return this.getThreats().map((threat) => (
			<Threat key={threat.threatId} threat={threat} />
		));
	}

	render() {
		$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
		return (
			<div>
			<div className="container">
				<ul className="collection with-header">
					<li className="collection-header">
					<span>
					<h4>My Threats</h4><button data-target="modal1" className="waves-effect waves-light btn modal-trigger">New Threat</button>
					</span>
					</li>
					{this.renderThreats()}
				</ul>
			</div>
			<NewThreatModal />
			</div>
		);
	}
}
