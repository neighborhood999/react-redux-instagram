import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

export default class NavBar extends Component {
  static propTypes = {
    user: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-default" id="navBar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <IndexLink to="/">
              <img src="http://i.imgur.com/iSDROgk.png" id="logoSize" role="presentation" />
            </IndexLink>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to={`/profile/${user}`}>{user}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
