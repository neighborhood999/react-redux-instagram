import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as ProfileActions from '../actions/profile';
import * as CommentAction from '../actions/comment';

function mapStateToProps(state) {
  return {
    instagramOAuth: state.instagramOAuth,
    profile: state.profile,
    comment: state.comment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileAction: bindActionCreators(ProfileActions, dispatch),
    commentAction: bindActionCreators(CommentAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
