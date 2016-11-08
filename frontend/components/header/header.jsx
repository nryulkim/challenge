import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  signout(){
    this.props.logout();
    this.props.router.replace("#");
  }

  getButtons(){
    const { currentUser } = this.props;
    if(currentUser){
      return [
        <h3>{currentUser.username}</h3>,
        <Link className="button" to="/logout">Sign Out</Link>
      ];
    }else{
      return [
        <Link className="button" to="/login">Sign In</Link>,
        <Link className="button" to="/signup">Sign Up</Link>
      ];
    }
  }

  render(){
    const { currentUser } = this.props;
    let button1, button2;
    [button1, button2] = this.getButtons();

    return(
      <div className="head">
        <div className="home-container">
          <Link className="home" to="/">Home</Link>
        </div>
        <div className="button-container">
          {button1}
          {button2}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
