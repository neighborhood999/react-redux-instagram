import React, { Component, PropTypes } from 'react';
import { fromNow, daysBetween } from 'unix-timestamp-transform';

export default class PhotoInfo extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
  }

  calculateTime(time) {
    const days = fromNow(time);

    return (
      <span className="label label-default">{daysBetween(days)}</span>
    );
  }

  render() {
    const { comment, profile } = this.props;
    const { CommentData, photoURL, likesCount, createTime, text } = comment;

    return (
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8">
                    <img className="img-responsive" src={photoURL} role="presentation" />
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-responsive img-circle"
                          src={profile.profile_picture}
                          style={{ width: '40px', height: '40px' }}
                          role="presentation"
                        />
                      </div>
                      <div className="col-md-9">
                        <h4>{profile.username}</h4>
                      </div>
                      <div className="col-md-12 text-right">
                        {this.calculateTime(createTime)}
                      </div>
                    </div>
                    <hr />
                    <div>
                      <i className="fa fa-heart" aria-hidden="true" /> {likesCount} 個讚
                    </div>
                    <br />
                    <div>
                    {text ? <div><a href="#">{profile.username}</a>{' '}{text}</div> : ''}
                      {CommentData.map((message, i) => {
                        return (
                          <p key={i}>{message.from.username} {message.text}</p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
