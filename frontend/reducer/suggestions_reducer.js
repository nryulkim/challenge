import { RECEIVE_SUGGESTIONS } from '../actions/suggestions_actions';
import merge from "lodash/merge";

export default (state = [], action) => {
  let newState = [].concat(state);

  switch(action.type){
    case RECEIVE_SUGGESTIONS:
      newState = action.suggestions;
      return newState;

    default:
      return state;
  }
};
