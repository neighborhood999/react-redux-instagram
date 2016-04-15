import React, { Component, PropTypes } from 'react';
import UserInfo from './Profile/UserInfo';
import UserPhotos from './Profile/UserPhotos';

export default class Profile extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    instagramOAuth: PropTypes.object.isRequired,
    fetchUserProfile: PropTypes.func.isRequired,
    fetchUserPhotos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchUserProfile, fetchUserPhotos } = this.props;
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    fetchUserProfile(token, userId);
    fetchUserPhotos(token, userId);
  }

  render() {
    const { profile } = this.props;
    const { counts } = profile.ProfileData;

    return (
      <div className="container">
        { profile.isFetchingProfile
          ? <div>Loading...</div>
          : <UserInfo profile={profile.ProfileData} counts={counts} />
        }
        <hr />
        { profile.isFetchingPhotos
          ? <div>Loading...</div>
          : <UserPhotos photos={profile.UserPhotos} />
        }
      </div>
    );
  }
}
