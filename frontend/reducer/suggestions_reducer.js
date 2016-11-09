import { RECEIVE_SUGGESTIONS, REMOVE_SUGGESTIONS } from '../actions/suggestions_actions';
import merge from "lodash/merge";

export default (state = [], action) => {
  let newState = [].concat(state);

  switch(action.type){
    case RECEIVE_SUGGESTIONS:
      newState = action.suggestions;
      return newState;

    case REMOVE_SUGGESTIONS:
      newState = [];
      return newState;

    default:
      return state;
  }
};
