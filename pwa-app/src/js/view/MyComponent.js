import React, { Component } from 'react';
import { fetchSpellCheck } from '../api'; // Import the fetchSpellCheck function from api.js

class MyComponent extends Component {
  state = {
    text: '', // Input text
    loading: false, // Loading state
    error: null, // Error state
    correctedText: null // Corrected text state
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ loading: true, error: null, correctedText: null });
    try {
      const data = await fetchSpellCheck(text); // Call the fetchSpellCheck function to fetch data
      console.log(data); // Handle the fetched data as needed
      this.setState({ correctedText: data.corrections[0]?.correctedValue }); // Update the correctedText state
    } catch (error) {
      this.setState({ error: error.message }); // Update the error state
    } finally {
      this.setState({ loading: false }); // Update the loading state
    }
  };

  render() {
    const { text, loading, error, correctedText } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={'helo'} onChange={this.handleTextChange} />
          <button type="submit" disabled={loading}>
            Check Spelling
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {correctedText && <p>Corrected Text: {correctedText}</p>}
      </div>
    );
  }
}

export default MyComponent;
