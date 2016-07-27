import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Profiles } from '../../api/profiles.js';

export default class AccountabilityPartnerForm extends React.Component {

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
          {
            this.props.userProfile.accountabilityPartner == "" ? 
          <form className="input-field col s6" onSubmit={this.handleSubmit.bind(this)} >
            <input
              id="ap"
              type="text"
              ref="textInput"
              className="validate"
            />
            <label htmlFor="ap">Accountability Partner</label>
          </form>
           : <span>accountabilityPartner: {this.props.userProfile.accountabilityPartner}</span>
         }
      </div>
    );
  }
}

AccountabilityPartnerForm.propTypes = {
  userProfile: PropTypes.object
};
