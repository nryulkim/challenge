import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import SuggestionsReducer from './suggestions_reducer';
import LocationsReducer from './locations_reducer';

export default combineReducers({
  session: SessionReducer,
  suggestions: SuggestionsReducer,
  location: LocationsReducer
});
