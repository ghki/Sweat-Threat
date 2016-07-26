import React from 'react';
import Header from '../components/Header.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header currentUser={Meteor.userId()} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
