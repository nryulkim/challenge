export const GET_LOCATION = "GET_LOCATION";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";

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

export function removeLocation(){
  return({
    type: REMOVE_LOCATION
  });
}
