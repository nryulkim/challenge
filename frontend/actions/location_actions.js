export const GET_LOCATION = "GET_LOCATION";
export const MY_LOCATIONS = "MY_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const NEW_LOCATION = "NEW_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const UNSAVE_LOCATION = "UNSAVE_LOCATION";
export const UPDATE_UNSAVED = "UPDATE_UNSAVED";

export function myLocations(id){
  return({
    type: MY_LOCATIONS,
    id
  });
}

export function receiveLocations(locations){
  return({
    type: RECEIVE_LOCATIONS,
    locations
  });
}

export function getLocation(text, coords){
  return({
    type: GET_LOCATION,
    text,
    coords
  });
}

export function receiveLocation(info){
  return({
    type: RECEIVE_LOCATION,
    info
  });
}

export function updateLocation(data, user){
  return({
    type: UPDATE_LOCATION,
    data,
    user
  });
}

export function removeLocation(){
  return({
    type: REMOVE_LOCATION
  });
}

export function unsaveLocation(user_id, location_id){
  return({
    type: UNSAVE_LOCATION,
    user_id,
    location_id
  });
}

export function updateUnsaved(location_id){
  return({
    type: UPDATE_UNSAVED,
    location_id
  });
}

export function newLocation(data, user){
  return({
    type: NEW_LOCATION,
    data,
    user
  });
}
