// ImageSearchForm.js

import React, { Component } from 'react';
import { fetchImageSearch } from '../api'; // Import the fetchImageSearch function from api.js

class ImageSearchForm extends Component {
  state = {
    query: '',
    numImages: 0, // New state for number of images
    results: [],
    loading: false,
    error: null
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleNumImagesChange = (event) => {
    this.setState({ numImages: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { query, numImages } = this.state; // Include numImages in the API call
    this.setState({ loading: true });

    try {
      const results = await fetchImageSearch(query, numImages); // Pass numImages to fetchImageSearch
      this.setState({ results, loading: false, error: null });
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { query, numImages, results, loading, error } = this.state; // Include numImages in the render method
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleInputChange} />
          <input
            type="number"
            value={numImages}
            onChange={this.handleNumImagesChange} // Add event handler for numImages input
          />
          <button type="submit" disabled={loading}>
            Search Images
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {results.map((result, index) => (
          <div key={index}>
            <img src={result.url} alt={result.title} />
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ImageSearchForm;
