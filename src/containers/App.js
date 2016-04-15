import { connect } from 'react-redux';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    instagramOAuth: state.instagramOAuth,
  };
}

export default connect(mapStateToProps)(Main);
