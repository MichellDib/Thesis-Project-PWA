import React, { Component } from 'react';
import WeatherView from '../view/WeatherView';
import { fetchWeather } from '../api';

class WeatherPresenter extends Component {
  state = {
    query: '',
    loading: false,
    error: null,
    renderTime: null,
    results: null
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true });
  
    const fetchStart = performance.now();
    try {
      const results = await fetchWeather(query);
      const fetchEnd = performance.now();

      const renderStart = performance.now();
      this.setState({ results, loading: false, error: null });
      const renderEnd = performance.now();
  
      const fetchTime = fetchEnd - fetchStart;
      const renderTime = renderEnd - renderStart;
  
      console.log("FETCH TIME: " + fetchTime);
      console.log("RENDER TIME: " + renderTime);
      this.setState({ renderTime });
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  }

  render() {
  const { query, results, loading, error, renderTime } = this.state;
  return (
    <WeatherView
      query={query}
      loading={loading}
      error={error}
      onInputChange={this.handleInputChange}
      onSubmit={this.handleSubmit}
      renderTime={renderTime}
      results={results}
    />
  );
}
}

export default WeatherPresenter;
