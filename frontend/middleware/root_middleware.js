import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SuggestionsMiddleware from './suggestions_middleware';
import LocationsMiddleware from './locations_middleware';
import createLogger from 'redux-logger';

let RootMiddleware;

const middleWares = [
  SessionMiddleware,
  SuggestionsMiddleware,
  LocationsMiddleware
];

if (process.env.NODE_ENV === "production") {
  RootMiddleware = applyMiddleware(
    ...middleWares
  );
} else {
  RootMiddleware = applyMiddleware(
    ...middleWares,
    createLogger()
  );
}

export default RootMiddleware;
