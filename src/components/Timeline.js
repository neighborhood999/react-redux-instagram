import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class Timeline extends Component {
  static propTypes = {
    instagramOAuth: PropTypes.object,
    location: PropTypes.object,
    getAccessToken: PropTypes.func,
  }

  componentDidMount() {
    const { code } = this.props.location.query;
    const { instagramOAuth, getAccessToken } = this.props;

    if (code !== undefined && Object.keys(instagramOAuth).length !== 0) {
      localStorage.setItem('token', instagramOAuth.token);
      localStorage.setItem('user', JSON.stringify(instagramOAuth.user));
      getAccessToken(localStorage.getItem('token'), localStorage.getItem('user'));

      browserHistory.replace({ pathname: '/' });
    }

    if (localStorage.getItem('token') === null) {
      browserHistory.replace({ pathname: '/instagramOAuth' });
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
