import React from 'react';
import { Link } from 'react-router';


export default class Navbar extends React.Component {
  render() {
    var navStyle = {
      backgroundColor: "#f48fb1", 
      paddingLeft: "12px"
    };

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Sweat Threat</a> &nbsp;
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>  <Link to="/about">About</Link> </li> &nbsp;
            <li> <Link to="/register">Register</Link> </li> &nbsp;
          </ul>
        </div>
      </nav>
    );
  }
}
