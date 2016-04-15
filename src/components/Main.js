import React, { Component, PropTypes } from 'react';
import NavBar from './common/NavBar';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    instagramOAuth: PropTypes.object.isRequired,
  };

  render() {
    const { instagramOAuth } = this.props;

    return (
      <div>
        <NavBar user={instagramOAuth.userName} />

        {/* this will render the child routes */}
        {this.props.children}
      </div>
    );
  }
}
