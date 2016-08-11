import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// import Threat from './Threat.jsx';

export default class ExcuseForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {

    event.preventDefault();

    // Find the text field via the React ref
    const excuse = ReactDOM.findDOMNode(this.refs.excuse).value.trim();
    //console.log(excuse);
    console.log(this.props.currentUser._id);
    Meteor.call('profiles.updateThreat', { userid:this.props.currentUser._id, threatId:"1469608101251", status:"pending", excuse:excuse } );

    $('#excuse_modal').closeModal();

  }

  render() {
    return (

      <div className="container">
        <header>
          <h1>Excuses...excuses...</h1>

          { this.props.currentUser ?
            <form className="input-field col s6" onSubmit={this.handleSubmit.bind(this)} >
              <input
                id="excuse"
                type="text"
                ref="excuse"
              />
              <input className="modal-footer" type="submit" value="Submit"/>
            </form> : ''
          }
        </header>
      </div>

    );

  }
}

ExcuseForm.propTypes = {
  //threats: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  //Meteor.subscribe('threats');

  return {
    currentUser: Meteor.user()
  };
}, ExcuseForm);
