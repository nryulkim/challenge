import { connect } from 'react-redux';
import Index from './index';
import { getLocation } from '../../actions/location_actions';


const mapStateToProps = (state, ownProps) => {
  const { location } = state;
  return({
    locations: location.saved
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    getLocation: (name, coords) => dispatch(getLocation(name, coords)),
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Index);
