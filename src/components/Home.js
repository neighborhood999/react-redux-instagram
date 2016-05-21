import React, { Component, PropTypes } from 'react';
import {
  checkLocalStorageToken,
  handleQueryCode,
  handleToken,
} from '../utils/handleAccessToken';

export default class Home extends Component {
  static propTypes = {
    instagramOAuth: PropTypes.object.isRequired,
    location: PropTypes.object,
    saveAccessToken: PropTypes.func,
  }

  componentDidMount() {
    const { code } = this.props.location.query;
    const { instagramOAuth, saveAccessToken } = this.props;

    // handle localStorage token.
    checkLocalStorageToken();
    handleQueryCode(code, instagramOAuth);
    handleToken(instagramOAuth, saveAccessToken);
  }

  render() {
    return (
      <div>
        <h1>Reactjs x Redux x Instagram</h1>
      </div>
    );
  }
}
