import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SuggestionsMiddleware from './suggestions_middleware';

export default applyMiddleware(
  SessionMiddleware, SuggestionsMiddleware
);
