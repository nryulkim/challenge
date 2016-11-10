import { connect } from 'react-redux';
import { removeLocation, newLocation, updateLocation } from '../../actions/location_actions';
import Show from './show';

const mapStateToProps = (state, ownProps) => {
  const { location, session } = state;
  return({
    location: location,
    current_user: session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    removeLocation: () => (dispatch(removeLocation())),
    newLocation: (data, user) => (dispatch(newLocation(data, user))),
    updateLocation: (data, user) => (dispatch(updateLocation(data, user)))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
