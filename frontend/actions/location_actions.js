export const GET_LOCATION = "GET_LOCATION";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const NEW_LOCATION = "NEW_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";

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

export function newLocation(data, user){
  return({
    type: NEW_LOCATION,
    data,
    user
  });
}
