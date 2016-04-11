import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as ProfileActions from '../actions/profile';

function mapStateToProps(state) {
  return {
    instagramOAuth: state.instagramOAuth,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
