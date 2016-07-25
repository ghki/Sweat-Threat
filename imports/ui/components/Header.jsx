import React from 'react';
import { Link } from 'react-router';


export default class Header extends React.Component {
  render() {
    let navStyle = {
        paddingLeft: "12px"
    };
    
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About Page</Link></li>
            <li><Link to="bad-url">Not Found Page</Link></li>
            <li><Link to="register">Register</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
