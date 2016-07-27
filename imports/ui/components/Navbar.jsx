import React from 'react';
import { Link } from 'react-router';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

export default class Navbar extends React.Component {
  render() {
    var navStyle = {
      backgroundColor: "#b2dfdb", 
      paddingLeft: "12px"
    };

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Sweat Threat</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link> </li>
            <li><AccountsUIWrapper/></li>
          </ul>
        </div>
      </nav>
    );
  }
}
