import { RECEIVE_LOCATION } from '../actions/location_actions';
import merge from "lodash/merge";

export default (state = [], action) => {
  let newState = [].concat(state);

  switch(action.type){
    case RECEIVE_LOCATION:
      newState = action.info;
      return newState;

    default:
      return state;
  }
};
