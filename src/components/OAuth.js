import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class OAuth extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token !== null) {
      browserHistory.replace({ pahtname: '/' });
    }
  }

  render() {
    return (
      <div>
        <h3>Instagram OAuth</h3>
        <a href="https://api.instagram.com/oauth/authorize/?client_id=52d1f7d9282a42f59e1c36f013acf974&redirect_uri=http://localhost:3000/&response_type=code&scope=likes+public_content+follower_list">Click</a>
      </div>
    );
  }
}
