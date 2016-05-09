import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
            <Link to="/">
              <img src="http://i.imgur.com/iSDROgk.png" id="logoSize" role="presentation" />
            </Link>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">explore</a></li>
              <li><Link to={`/profile/${user}`}>{user}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
