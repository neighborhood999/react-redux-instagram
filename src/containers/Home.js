import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as instagramOAuthActions from '../actions/instagramOAuth';

const mapStateToProps = (state) => ({
  instagramOAuth: state.instagramOAuth,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(instagramOAuthActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
