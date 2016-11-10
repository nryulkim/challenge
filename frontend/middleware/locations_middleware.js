import * as LocationApi from '../util/location_api_util';
import {
  GET_LOCATION, NEW_LOCATION, UPDATE_LOCATION, receiveLocation
} from '../actions/location_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = information => {
    dispatch(receiveLocation(information));
  };
  switch(action.type){
    case GET_LOCATION:
      LocationApi.locations(action.text, action.coords, success);
      return next(action);

    case NEW_LOCATION:
      success = () => {
        debugger
      }
      LocationApi.createLocation(action.data, action.user, success)
      return next(action);

    case UPDATE_LOCATION:
      success = () => {
        debugger
      }
      LocationApi.updateLocation(action.data, action.user, success)
      return next(action);

    default:
      return next(action);
  }
}
