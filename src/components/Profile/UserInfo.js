import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    counts: PropTypes.object,
  }

  splitURL(website) {
    return website.split(/^https?:\/\//)[1];
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
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-2">
          <img src={profile.profile_picture} className="img-circle"></img>
        </div>
        <div className="col-md-5">
          <h3>{profile.username}{' '}<small>{profile.full_name}</small></h3>
          <h4>
            {media} 則貼文 {' | '}
            {followedBy} 位粉絲 {' | '}
            追蹤 {follows} 人
          </h4>
          <h4><small>{profile.bio}</small></h4>
          <p>
            <a href={profile.website}>{profile.website ? this.splitURL(profile.website) : ''}</a>
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}
