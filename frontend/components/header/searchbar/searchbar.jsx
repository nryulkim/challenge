import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.cbID = 0;
    this.lastLength = 0;
    this.lastCity = "";
    this.state = {
      value: '',
      suggestions: [""],
      coords: [0, 0],
      city: "",
      placeholder: "Enter a City first"
    };
    this.clicked = false;
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setText = this.setText.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({ suggestions: nextProps.words });
  }

  componentWillUpdate(nextProps, nextState){
    const bar = this;
    const length = nextState.value.length;
    if(length > 3 && !this.clicked && (this.lastLength !== length || this.lastCity !== nextState.city)){
      this.lastLength = length;
      this.lastCity = nextState.city;
      window.clearTimeout(this.cbID);
      this.cbID = window.setTimeout(() => {
        bar.props.getSuggestions(nextState.value, nextState.coords);
      }, 200);
    }
  }

  componentDidMount(){
    $("#location-input").prop("disabled", true);
    $("#search-button").prop("disabled", true);
    const bar = this;
    function initialize() {
      const input = document.getElementById('searchTextField');
      const autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        const place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        bar.setState({ city: place.name, coords: [lat, lng], suggestions: [] });
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  shouldRenderSuggestions() {
    return !this.clicked && this.state.value.length > 2;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion}</span>
    );
  }

  setText(e){
    e.preventDefault();
    this.clicked = true;
    this.setState({ value: e.target.textContent });
  }

  handleSubmit(e){
    e.preventDefault();
    let { value, coords } = this.state;
    this.clicked = false;
    this.props.getLocation(value, coords);
    $("#searchTextField").val("");
    this.setState({ value: "", suggestions:[""] });
    if(this.props.router.location.pathname === "/show"){
      this.props.removeLocation();
    }else{
      this.props.router.push('/show');
    }
    this.props.removeSuggestions();
  }

  getSuggestionValue(suggestion){
    return suggestion;
  }

  onChange(event, { newValue, method }) {
    this.clicked = false;
    $("#search-button").prop("disabled", true);
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.props.words
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  toggleInput(){
    const { city, value } = this.state;
    if(city){
      $("#location-input").prop("disabled", false);
      this.state.placeholder = "Location";
      if(value && this.clicked){
        $("#search-button").prop("disabled", false);
      }
    }else if(!city || !value){
      $("#location-input").prop("disabled", true);
      this.state.placeholder = "Enter a City first";
      if(!value || !this.clicked){
        $("#search-button").prop("disabled", true);
      }
    }
  }

  render() {
    const { value, suggestions, coords, city } = this.state;
    this.toggleInput();
    const inputProps = {
      value,
      onChange: this.onChange,
      placeholder: this.state.placeholder,
      className: "search-input",
      id: "location-input"
    };
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          id="searchTextField"
          type="text"
          placeholder="City"
          autoComplete="on"
          className="search-input city-input"/>
        <input type="hidden" value={city} name="city2" />
        <input type="hidden" value={coords[0]} name="cityLat" />
        <input type="hidden" value={coords[1]} name="cityLng" />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.setText}
          inputProps={inputProps}/>
        <button id="search-button" type="submit">Find</button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
