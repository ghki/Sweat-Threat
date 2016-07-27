import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profiles.js';
import Threat from './Threat.jsx';

// ThreatForm component
export default class ThreatForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {

    event.preventDefault();

    // Find the text field via the React ref
    const date_time = ReactDOM.findDOMNode(this.refs.date_time).value.trim();
    const location = ReactDOM.findDOMNode(this.refs.location).value.trim();

    // const threatObject = {
    //   date_time,
    //   location
    // };

    // Meteor.call('profiles.addThreat', { userid:this.props.currentUser.userid, threat:threatObject } );
    Meteor.call('profiles.addThreat', { userid:this.props.currentUser._id, date_time:date_time, location:location } );



    $('#modal1').closeModal();

  }

  // renderThreats() {
  //   return (
  //     <Profiles
  //       key={threat.threatId}
  //       threat={threat}
  //     />
  //   );
  // };

  render() {
    return (
      <div className="container">
        <header>
          <h1>New Threat</h1>

          { this.props.currentUser ?
            <form className="new-threat" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="date_time"
                placeholder="Add a date and time"
              />
              <input
                type="text"
                ref="location"
                placeholder="Add a place"
              />
              <input className="modal-footer" type="submit" value="Submit"/>
            </form> : ''
          }
        </header>

        
      </div>
    );

  }
}

ThreatForm.propTypes = {
  //threats: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('threats');

  return {
    currentUser: Meteor.user()
  };
}, ThreatForm);
