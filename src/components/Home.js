import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class Home extends Component {
  static propTypes = {
    instagramOAuth: PropTypes.object,
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
    } else {
      saveAccessToken(localStorage.getItem('token'), localStorage.getItem('userId'));
    }
  }

  render() {
    return (
      <div>
        <h1>Reactjs x Redux x Instagram</h1>
        <h3>Timeline</h3>
      </div>
    );
  }
}
