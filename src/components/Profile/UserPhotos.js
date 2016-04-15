import React, { Component, PropTypes } from 'react';

export default class UserPhotos extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
  }

  render() {
    const { photos } = this.props;

    return (
      <div className="row">
        { photos.map((photo) => {
          return (
            <div key={photo.id} className="col-md-3">
              <div className="hovereffect">
                <img className="img-responsive" src={photo.images.standard_resolution.url}></img>
                <div className="overlay">
                  <h2><i className="fa fa-heart"> {photo.likes.count}</i></h2>
                  <h2><i className="fa fa-comment"> {photo.comments.count}</i></h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
