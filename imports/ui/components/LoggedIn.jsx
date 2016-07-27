import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Profiles } from '../../api/profiles.js';
import AccountabilityPartnerForm from './AccountabilityPartnerForm.jsx'

export default class LoggedIn extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    var docid = Profiles.findOne({userid:this.props.userProfile.userid});
    Profiles.update(docid._id, { $set: { accountabilityPartner: text} });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div>
          <h2>{this.props.userProfile.username}'s Profile</h2> 
          <AccountabilityPartnerForm userProfile={this.props.userProfile} />
      </div>
    );
  }
}

LoggedIn.propTypes = {
  userProfile: PropTypes.object
};
