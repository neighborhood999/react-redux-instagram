import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    counts: PropTypes.object,
  }

  render() {
    const { profile, counts } = this.props;
    let media;
    let followedBy;
    let follows;

    if (typeof(counts) !== 'undefined') {
      media = counts.media;
      followedBy = counts.followed_by;
      follows = counts.follows;
    }

    return (
      <div>
        <img src={profile.profile_picture}></img>
        <div id="info">
          <p>
            {media} 則貼文，
            {followedBy} 粉絲，
            正在追蹤 {follows} 人
          </p>
          <ul>
            <li>{profile.username}</li>
            <li>{profile.bio}</li>
            <li>{profile.full_name}</li>
            <li>{profile.website}</li>
          </ul>
        </div>
      </div>
    );
  }
}
