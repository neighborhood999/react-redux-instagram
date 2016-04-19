import React, { Component, PropTypes } from 'react';
import PhotoInfo from '../common/PhotoInfo';

export default class UserPhotos extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    photos: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    commentAction: PropTypes.object.isRequired,
  }

  photoInfo(mediaId, photoURL, likesCount, createTime, text) {
    const { token, commentAction } = this.props;
    const { fetchPhotoComment } = commentAction;

    fetchPhotoComment(
      token,
      mediaId,
      photoURL,
      likesCount,
      createTime,
      text
    );
  }

  render() {
    const { photos, comment, profile } = this.props;

    return (
      <div className="row">
        { photos.map((photo) => {
          return (
            <div key={photo.id} className="col-md-3">
              <div className="hovereffect"
                onClick={() => this.photoInfo(
                  photo.id,
                  photo.images.standard_resolution.url,
                  photo.likes.count,
                  photo.created_time,
                  photo.caption === null ? '' : photo.caption.text,
                )}
                data-toggle="modal"
                data-target="#myModal"
              >
                <img className="img-responsive" src={photo.images.standard_resolution.url} />
                <div className="overlay">
                  <h2><i className="fa fa-heart"> {photo.likes.count}</i></h2>
                  <h2><i className="fa fa-comment"> {photo.comments.count}</i></h2>
                </div>
              </div>
            </div>
          );
        })}
        <PhotoInfo profile={profile} comment={comment} />
      </div>
    );
  }
}
