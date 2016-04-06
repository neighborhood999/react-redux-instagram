import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from '../components/Timeline';
import * as instagramOAuthActions from '../actions/instagramOAuth';

function mapStateToProps(state) {
  return {
    instagramOAuth: state.instagramOAuth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(instagramOAuthActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
