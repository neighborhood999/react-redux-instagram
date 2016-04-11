import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';

export default class Home extends Component {
  static propTypes = {
    instagramOAuth: PropTypes.object.isRequired,
    location: PropTypes.object,
    saveAccessToken: PropTypes.func,
  }

  componentDidMount() {
    const { code } = this.props.location.query;
    const { instagramOAuth, saveAccessToken } = this.props;

    if (code !== undefined && Object.keys(instagramOAuth).length !== 0) {
      localStorage.setItem('token', instagramOAuth.token);
      localStorage.setItem('userId', instagramOAuth.userId);

      browserHistory.replace({ pathname: '/' });
    }

    if (localStorage.getItem('token') === null) {
      browserHistory.replace({ pathname: '/instagramOAuth' });
    }

    if (Object.keys(instagramOAuth).length === 0 && localStorage.getItem('token') !== null) {
      saveAccessToken(localStorage.getItem('token'), localStorage.getItem('userId'));
    }
  }

  render() {
    return (
      <div>
        <h1>Reactjs x Redux x Instagram</h1>
        <h3>Home</h3>
        <Link to="counter">Counter Page</Link>
        {' '}
        <Link to="profile">Profile Page</Link>
      </div>
    );
  }
}
