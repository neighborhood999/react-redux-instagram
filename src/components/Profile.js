import React, { Component, PropTypes } from 'react';
import UserInfo from './Profile/UserInfo';
import UserPhotos from './Profile/UserPhotos';
import {
  checkLocalStorageToken,
} from '../utils/handleAccessToken';

export default class Profile extends Component {
  static propTypes = {
    instagramOAuth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    profileAction: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    commentAction: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // check have access token.
    checkLocalStorageToken();

    const { profileAction } = this.props;
    const { fetchUserProfile, fetchUserPhotos } = profileAction;
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    fetchUserProfile(token, userId);
    fetchUserPhotos(token, userId);
  }

  render() {
    const { instagramOAuth, profile, comment, commentAction } = this.props;
    const { counts } = profile.ProfileData;

    return (
      <div className="container">
        {profile.isFetchingProfile
          ? <div>Loading...</div>
          : <UserInfo profile={profile.ProfileData} counts={counts} />
        }
        <hr />
        {profile.isFetchingPhotos
          ? <div>Loading...</div>
          : <UserPhotos
            photos={profile.UserPhotos}
            token={instagramOAuth.token}
            profile={profile.ProfileData}
            comment={comment}
            commentAction={commentAction}
          />
        }
      </div>
    );
  }
}
