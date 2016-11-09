import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { getSuggestions } from '../../../actions/suggestions_actions';

function mapStateToProps(state){
  return({
    words: state.suggestions
  });
}

function mapDispatchToProps(dispatch){
  return({
    getSuggestions: (text, coords) => dispatch(getSuggestions(text, coords))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Searchbar);
