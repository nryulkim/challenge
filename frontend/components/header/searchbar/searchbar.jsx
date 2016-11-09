import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      all_words: [
        "something",
        "other",
        "test case",
        "someother",
        "somewhere"
      ],
      suggestions: [],
      coord: [0, 0],
      city: "",
      placeholder: "Enter a City first"
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllWords = this.getAllWords.bind(this);
    this.setText = this.setText.bind(this);
  }

  componentDidMount(){
    $("#location-input").prop("disabled", true);
    $("#search-button").prop("disabled", true);
    const bar = this;
    function initialize() {
      const input = document.getElementById('searchTextField');
      const autocomplete = new google.maps.places.Autocomplete(input);
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        const place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        bar.setState({ city: place.name, coord: [lat, lng] });
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.videos !== null){
      this.getAllWords(nextProps);
    }
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  }

  getAllWords(props){
    // set autocomplete words
    // let all_words = [];
    // this.setState({ all_words });
  }

  getSuggestions(value) {
    const { all_words } = this.state;
    let suggestions = [""];
    const searchTerms = value.trim().split(" ");
    const testFunc = (regex) => {
      return (word) => regex.test(word);
    };

    while(searchTerms.length > 0){
      const term = searchTerms.shift();
      const escapedValue = this.escapeRegexCharacters(term);
      const regex = new RegExp(escapedValue, "i");
      let suggestedWords = all_words.filter(testFunc(regex));
      let newSuggestions = [];
      for (let i = 0; i < suggestions.length; i++) {
        for (let j = 0; j < suggestedWords.length; j++) {
          let string = (`${suggestions[i]} ${suggestedWords[j]}`).trim();
          newSuggestions.push(string);
        }
      }

      suggestions = newSuggestions;
    }
    return suggestions;
  }

  shouldRenderSuggestions() {
    return this.state.value.length > 2;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion}</span>
    );
  }

  setText(e){
    e.preventDefault();
    this.setState({ value: e.target.textContent });
  }

  handleSubmit(e){
    e.preventDefault();
    let { value, coord } = this.state;
    console.log(coord + " " + value);
    $("#searchTextField").val("");
    this.setState({ value: "" });
  }

  getSuggestionValue(suggestion){
    return suggestion;
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
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
      if(value){
        $("#search-button").prop("disabled", false);
      }
    }else if(!city || !value){
      $("#location-input").prop("disabled", true);
      this.state.placeholder = "Enter a City first";
      if(!value){
        $("#search-button").prop("disabled", true);
      }
    }
  }

  render() {
    const { value, suggestions, coord, city } = this.state;
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
        <input type="hidden" value={coord[0]} name="cityLat" />
        <input type="hidden" value={coord[1]} name="cityLng" />
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
