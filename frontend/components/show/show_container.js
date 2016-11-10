import { connect } from 'react-redux';
import { removeLocation, newLocation } from '../../actions/location_actions';
import Show from './show';

const mapStateToProps = (state, ownProps) => {
  const { location, session } = state;
  return({
    location: location,
    current_user: session.current_user
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    removeLocation: () => (dispatch(removeLocation())),
    newLocation: (data, user) => (dispatch(addLocation(data, user)))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
