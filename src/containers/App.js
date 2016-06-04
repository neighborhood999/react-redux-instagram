import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = (state) => ({
  instagramOAuth: state.instagramOAuth,
});

export default connect(mapStateToProps)(Main);
