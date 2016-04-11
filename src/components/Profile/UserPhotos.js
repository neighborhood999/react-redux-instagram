
import React, { Component, PropTypes } from 'react';

export default class UserPhotos extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
  }

  render() {
    const { photos } = this.props;

    return (
      <div>
        { photos.map((photo) => {
          return <img key={photo.id} src={photo.images.thumbnail.url}></img>;
        })}
      </div>
    );
  }
}
