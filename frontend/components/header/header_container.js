import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, props) => {
  const { session } = state;
  return({
    currentUser: session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);
