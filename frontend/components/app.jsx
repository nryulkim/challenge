import React from 'react';
import Header from './header/header_container';
export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { children, location } = this.props;
    // const currentUser = store.getState().session.currentUser;
    return(
      <main>
        <header>
          <Header />
        </header>
      </main>
    );
  }
}
