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
      suggestions: []
    };

    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllWords = this.getAllWords.bind(this);
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

  handleSubmit(e){
    e.preventDefault();
    let { value } = this.state;
    console.log(value);
    this.setState({value: ""});
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

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange
    };

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.handleSubmit}
          inputProps={inputProps} />
        <button type="submit">Find</button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
