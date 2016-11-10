import * as LocationApi from '../util/location_api_util';
import {
  GET_LOCATION, NEW_LOCATION, UPDATE_LOCATION, MY_LOCATIONS, UNSAVE_LOCATION,
  receiveLocations, receiveLocation, updateUnsaved
} from '../actions/location_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = information => {
    dispatch(receiveLocation(information));
  };
  switch(action.type){
    case GET_LOCATION:
      LocationApi.locations(action.text, action.coords, success);
      return next(action);

    case MY_LOCATIONS:
      success = locations => {
        dispatch(receiveLocations(locations));
      }
      LocationApi.myLocations(action.id, success);
      return next(action);

    case NEW_LOCATION:
      LocationApi.createLocation(action.data, action.user)
      return next(action);

    case UNSAVE_LOCATION:
      success = location => {
        dispatch(updateUnsaved(location.id))
      }
      LocationApi.unsaveLocation(action.user_id, action.location_id, success)
      return next(action);

    case UPDATE_LOCATION:
      LocationApi.updateLocation(action.data, action.user)
      return next(action);

    default:
      return next(action);
  }
}
