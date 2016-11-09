export const GET_LOCATION = "GET_LOCATION";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

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
