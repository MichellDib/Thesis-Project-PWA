import React, { Component } from 'react';
import ImageSearchView from '../view/ImageSearchView';
import { fetchImageSearch } from '../api';

class ImageSearchPresenter extends Component {
  state = {
    query: '',
    numImages: 0,
    results: [],
    loading: false,
    error: null,
    renderTime: null
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleNumImagesChange = (event) => {
    this.setState({ numImages: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { query, numImages } = this.state;
    this.setState({ loading: true });

    const start = performance.now();
    try {
      const results = await fetchImageSearch(query, numImages);
      const end = performance.now();
      const renderTime = end - start;

      const multiplier = 200;
      const multipliedResults = results.concat(...Array.from({ length: multiplier - 1 }, () => results));
      this.setState({ results: multipliedResults, loading: false, error: null, renderTime});

      

      /*this.setState({ results, loading: false, error: null, renderTime });*/
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { query, numImages, results, loading, error, renderTime } = this.state;
    return (
      <ImageSearchView
        query={query}
        numImages={numImages}
        results={results}
        loading={loading}
        error={error}
        onInputChange={this.handleInputChange}
        onNumImagesChange={this.handleNumImagesChange}
        onSubmit={this.handleSubmit}
        renderTime={renderTime}
      />
    );
  }
}

export default ImageSearchPresenter;
