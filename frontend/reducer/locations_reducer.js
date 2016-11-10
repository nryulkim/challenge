import { RECEIVE_LOCATION, REMOVE_LOCATION, RECEIVE_LOCATIONS } from '../actions/location_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_LOCATION:
      newState = merge(newState, action.info);
      return newState;

    case REMOVE_LOCATION:
      newState = {};
      return newState;

    case RECEIVE_LOCATIONS:
      newState = merge(newState, { saved: action.locations });
      return newState;

    default:
      return state;
  }
};
