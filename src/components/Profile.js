import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
      <div>
        <h3>User Profile</h3>
        { profile.ProfileData.isFetchingProfile
          ? <div>Loading...</div>
          : <UserInfo profile={profile.ProfileData} counts={counts} />
        }

        { profile.UserPhotos.isFetchingPhotos
          ? <div>Loading photos...</div>
          : <UserPhotos photos={profile.UserPhotos} />
        }

        {' '}
        <Link to="/">Back Home</Link>
      </div>
    );
  }
}
