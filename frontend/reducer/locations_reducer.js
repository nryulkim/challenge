import {
  RECEIVE_LOCATION, REMOVE_LOCATION, RECEIVE_LOCATIONS, UPDATE_UNSAVED
} from '../actions/location_actions';
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

    case UPDATE_UNSAVED:
      let index = -1;
      let i = 0;
      while(index === -1 && i < newState.saved.length){
        if(newState.saved[i].id == action.location_id){
          index = i;
        }
        i ++;
      }
      if(index !== -1){
        newState.saved.splice(index,1);
      }
      return newState;

    default:
      return state;
  }
};
