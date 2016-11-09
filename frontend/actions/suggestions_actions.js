export const GET_SUGGESTIONS = "GET_SUGGESTIONS";
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
export const REMOVE_SUGGESTIONS = "REMOVE_SUGGESTIONS";

export function getSuggestions(text, coords){
  return({
    type: GET_SUGGESTIONS,
    text,
    coords
  });
}

export function receiveSuggestions(suggestions){
  return({
    type: RECEIVE_SUGGESTIONS,
    suggestions
  });
}

export function removeSuggestions(){
  return({
    type: REMOVE_SUGGESTIONS
  });
}
