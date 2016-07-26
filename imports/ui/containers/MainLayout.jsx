import React from 'react';
import Navbar from '../components/Navbar.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
