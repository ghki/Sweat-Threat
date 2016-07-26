import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Threats } from '../../api/threats.js';

import Threat from '../pages/Threat.jsx';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

// ThreatForm component
export default class ThreatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('threats.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderThreats() {
    let filteredThreats = this.props.threats;
    if (this.state.hideCompleted) {
      filteredThreats = filteredThreats.filter(threat => !threat.checked);
    }
    return filteredThreats.map((threat) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = threat.owner === currentUserId;

      return (
        <Threat
          key={threat._id}
          threat={threat}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Threat List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Threats
          </label>

          <AccountsUIWrapper />

          { this.props.currentUser ?
            <form className="new-threat" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new threats"
              />
            </form> : ''
          }
        </header>

        <ul>
          {this.renderThreats()}
        </ul>
      </div>
    );
  }
}

ThreatForm.propTypes = {
  threats: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('threats');

  return {
    threats: Threats.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Threats.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, ThreatForm);
