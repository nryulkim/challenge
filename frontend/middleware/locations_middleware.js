import * as LocationApi from '../util/location_api_util';
import {
  GET_LOCATION, receiveLocation
} from '../actions/location_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = information => {
    dispatch(receiveLocation(information));
  };
  switch(action.type){
    case GET_LOCATION:
      LocationApi.locations(action.text, action.coords, success);
      return next(action);

    default:
      return next(action);
  }
}
