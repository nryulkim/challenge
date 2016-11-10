import { connect } from 'react-redux';
import Index from './index';
import { getLocation, unsaveLocation } from '../../actions/location_actions';


const mapStateToProps = (state, ownProps) => {
  const { location, session } = state;
  return({
    locations: location.saved,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    getLocation: (name, coords) => dispatch(getLocation(name, coords)),
    unsaveLocation: (user_id, location_id) => dispatch(unsaveLocation(user_id, location_id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Index);
