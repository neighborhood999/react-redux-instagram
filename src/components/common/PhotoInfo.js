import React, { Component, PropTypes } from 'react';

export default class PhotoInfo extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  }

  render() {
    const { comment } = this.props;
    const { CommentData, PhotoURL } = comment;
    return (
      <div className="modal fade"
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
                    <img className="img-responsive" src={PhotoURL}></img>
                  </div>
                  <div className="col-md-4">
                    {CommentData.map((message, i) => {
                      return (
                        <p key={i}>{message.text}</p>
                      );
                    })}
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
