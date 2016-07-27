import React, { Component, PropTypes } from 'react';

export default class LoggedIn extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    
    Profiles.update("DXq9aea8SkcnWxCGM", { $set: { accountabilityPartner: text} });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div>
		<h2>{this.props.userProfile.username}'s Profile</h2> 
          <form className="input-field col s6" onSubmit={this.handleSubmit.bind(this)} >
            <input
              id="ap"
              type="text"
              ref="textInput"
              className="validate"
            />
            <label htmlFor="ap">Accountability Partner</label>
          </form>
      </div>
    );
  }
}

LoggedIn.propTypes = {
  userProfile: PropTypes.object
};
