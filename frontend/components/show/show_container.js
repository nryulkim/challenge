import { connect } from 'react-redux';
import { removeLocation } from '../../actions/location_actions';
import Show from './show';

const mapStateToProps = ({ location }, ownProps) => {
  return({
    yelp_url: location.yelp_url
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    removeLocation: () => (dispatch(removeLocation()))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
