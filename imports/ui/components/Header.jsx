import React from 'react';
import { Link } from 'react-router';
import LoginButtons from './LoginButtons.jsx'


export default class Header extends React.Component {
  render() {
    let navStyle = {
        paddingLeft: "12px"
    };
    
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            { this.props.currentUser ?
              <li><Link to="/profile">Profile</Link></li> : ''
            }
            <LoginButtons />
          </ul>
        </div>
      </nav>
    );
  }
}
