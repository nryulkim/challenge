import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }
    const store = configureStore(initialState);
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
