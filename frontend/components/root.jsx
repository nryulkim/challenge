import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Session from './session/session_container.js';
import Show from './show/show_container.js';
import Index from './index/index_container.js';
import { myLocations } from '../actions/location_actions';


const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser){
      replace("/");
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if(!store.getState().session.currentUser){
      replace("/login");
    }
  };

  const _getLocations = () => {
    const id = store.getState().session.currentUser.id;
    window.setTimeout(()=>{
      store.dispatch(myLocations(id));
    }, 500)
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Router path="signup" component={Session} onEnter={_redirectIfLoggedIn}/>
          <Router path="login" component={Session} onEnter={_redirectIfLoggedIn}/>
          <Router path="show" component={Show}/>
          <Router path="locations" component={Index} onEnter={_getLocations}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
