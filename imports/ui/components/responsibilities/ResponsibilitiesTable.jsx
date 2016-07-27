import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Responsibility from './Responsibility.jsx';
import { Threats } from '../../../api/threats.js'

export default class ResponsibilitiesTable extends Component {
    constructor(props) {
    super(props);
  }

  renderResponsibilities() {
    return this.props.responsibilities.map((responsibility) => (
      <Responsibility key={responsibility._id} responsibility={responsibility} />
    ));
  }

  render() {
    return (
      <div className="col s8">
			<h2 className="header">Your Responsibilities</h2>
			<table>
				<thead>
				  <tr>
					  <th data-field="id">Date</th>
					  <th data-field="price">Location</th>
					  <th data-field="name">Threat User</th>
					  <th data-field="t"></th>
				  </tr>
				</thead>
				<tbody>
				{
				  this.props.currentUser ? this.renderResponsibilities() : ''
				}
				</tbody>
			</table>
		</div>
    );
  }
}

ResponsibilitiesTable.propTypes = {
  responsibilities: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    responsibilities: Threats.find({'partner_username': Meteor.user().services.twitter.screenName }, { sort: { datetime: 1 } }).fetch(),
	currentUser: Meteor.user(),
  };
}, ResponsibilitiesTable);