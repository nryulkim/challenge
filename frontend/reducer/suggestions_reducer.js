import { RECEIVE_SUGGESTIONS } from '../actions/suggestions_actions';
import merge from "lodash/merge";

export default (state = {}, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_SUGGESTIONS:
      debugger
      return newState;

    default:
      return state;
  }
};
