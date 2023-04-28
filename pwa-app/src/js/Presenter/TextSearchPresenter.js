import React, { Component } from 'react';
import TextSearchView from '../view/TextSearchView';

class TextSearchPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      text: '',
      result: null,
      loading: false,
      error: null,
      filterTime: 0,
    };
  }

  handleSearchTermChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };
  

  handleTextChange = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  handleSearch = async () => {
    console.log("LOL")
    this.setState({ loading: true });
    console.log("HEJ");
    const filterStart = performance.now();
    const { searchTerm, text } = this.state;
    const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    const count = (text.match(regex) || []).length;
    const filterEnd = performance.now();
    const filterTime = filterEnd - filterStart;
    this.setState({ result: count, loading: false, filterTime });
  };

  handleError = (error) => {
    this.setState({ error, loading: false });
  };

  render() {
    const { searchTerm,text, result, loading, error, filterTime } = this.state;
    return (
      <TextSearchView
        searchTerm={searchTerm}
        text={text}
        result={result}
        loading={loading}
        onSearchTermChange={this.handleSearchTermChange}
        onTextChange={this.handleTextChange}
        onSearch={this.handleSearch}
        onError={this.handleError}
        filterTime={filterTime}
      />
    );
  }
  
}

export default TextSearchPresenter;
