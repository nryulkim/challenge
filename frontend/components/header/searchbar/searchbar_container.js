import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { getSuggestions } from '../../../actions/suggestions_actions';
import { getLocation } from '../../../actions/location_actions';

function mapStateToProps(state){
  return({
    words: state.suggestions
  });
}

function mapDispatchToProps(dispatch){
  return({
    getSuggestions: (text, coords) => dispatch(getSuggestions(text, coords)),
    getLocation: (text, coords) => dispatch(getLocation(text, coords))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Searchbar);
