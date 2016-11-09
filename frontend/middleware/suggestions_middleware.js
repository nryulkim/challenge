import * as SuggestionsApi from '../util/suggestions_api_util';
import {
  GET_SUGGESTIONS, receiveSuggestions
} from '../actions/suggestions_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = suggestions => {
    dispatch(receiveSuggestions(suggestions));
  };
  switch(action.type){
    case GET_SUGGESTIONS:
      SuggestionsApi.suggestions(action.text, action.coords, success);
      return next(action);

    default:
      return next(action);
  }
}
