import React from 'react';
import { Link } from 'react-router';

class Show extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yelp: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    $(".location-container").hide();
  }

  componentWillUnmount(){
    this.props.removeLocation();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.yelp_url){
      $(".location-container").show();
      $(".loader").hide();
      this.setState({ yelp: nextProps.yelp_url });
    }else{
      $(".location-container").hide();
      $(".loader").show();
    }

  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    console.log("hello");
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }


  render(){
    return(
      <div className="show-content">
        <div className="loader"/>
        <div className="location-container">
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="yelp_url">Yelp</label>
                <input
                  id="yelp_url"
                  type="text"
                  value={this.state.yelp}
                  onChange={this.update('yelp')}
                  placeholder="Yelp URL"/>
              </div>

              <button id="submit" className="button" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
