import { connect } from 'react-redux';
import OAuth from '../components/OAuth';

const mapStateToProps = (state) => ({
  instagramOAuth: state.instagramOAuth,
});

export default connect(mapStateToProps)(OAuth);
