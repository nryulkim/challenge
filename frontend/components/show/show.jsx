import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';

class Show extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      yelp: "",
      four_square: "",
      trip_advisor: ""
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
    const { location } = nextProps;
    const { name, yelp_url, f_url } = location;
    if(yelp_url){
      $(".location-container").show();
      $(".loader").hide();
      this.setState({ name: name, yelp: yelp_url, four_square: f_url });
    }else{
      $(".location-container").hide();
      $(".loader").show();
    }

  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    const data = merge({}, this.props.location, this.state);
    this.newLocation(data, this.props.current_user);
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
              <h1>{this.state.name}</h1>
              <div>
                <label htmlFor="yelp_url">Yelp</label>
                <input
                  id="yelp_url"
                  type="text"
                  value={this.state.yelp}
                  onChange={this.update('yelp')}
                  placeholder="Yelp URL"/>
              </div>
              <div>
                <label htmlFor="four_url">FourSquare</label>
                <input
                  id="four_url"
                  type="text"
                  value={this.state.four_square}
                  onChange={this.update('four_square')}
                  placeholder="FourSquare URL"/>
              </div>
              <div>
                <label htmlFor="trip_url">TripAdvisor</label>
                <input
                  id="trip_url"
                  type="text"
                  value={this.state.trip_advisor}
                  onChange={this.update('trip_advisor')}
                  placeholder="TripAdvisor URL"/>
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
