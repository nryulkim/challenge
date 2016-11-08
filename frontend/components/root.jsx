import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Session from './session/session_container.js';



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

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Router path="signup" component={Session} onEnter={_redirectIfLoggedIn}/>
          <Router path="login" component={Session} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
