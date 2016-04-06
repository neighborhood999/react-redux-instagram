import { connect } from 'react-redux';
import OAuth from '../components/OAuth';

function mapStateToProps(state) {
  return {
    instagramOAuth: state.instagramOAuth,
  };
}

export default connect(mapStateToProps)(OAuth);
