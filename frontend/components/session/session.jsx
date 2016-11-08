import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({
      username: "",
      password: "",
    });
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    const { formType, process } = this.props;
    const router = this.props.router;

    $("#submit").prop("disabled",true).toggleClass("disabled");
    const redirect = () => {
      router.push("/");
    };

    let output = this.state;
    process(output, redirect);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  renderErrors(){
    const { errors } = this.props;
    let text = "";
    if(errors.length > 0){
      text = errors.map((error, idx) => (<li key={idx}>{error}</li>));
      $("#submit").prop("disabled", false).toggleClass("disabled");
    }

    return text;
  }


  render(){
    const { formType } = this.props;

    return(
      <div className="session-container">
        <ul className= "errors">
          {this.renderErrors()}
        </ul>
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Enter your username"/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"/>

            <button id="#submit" type="submit">{formType}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
