import React, { Component } from "react";
import TweetView from "../view/TweetView";
import { fetchTweets } from "../api";

class TweetPresenter extends Component {
  state = {
    loading: false,
    error: null,
    setStateTime: null,
    renderTime: null,
    results: null,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    console.log("hej");
    const fetchStart = performance.now();
    try {
      console.log("hej2");
      const results = await fetchTweets();
      console.log("hej3");
      const fetchEnd = performance.now();
      const setStateStart = performance.now();
      this.setState({ results, loading: false, error: null }, () => {
        const setStateEnd = performance.now();
        const fetchTime = fetchEnd - fetchStart;
        const setStateTime = setStateEnd - setStateStart;
        console.log(setStateTime);
        const renderTime = setStateEnd - fetchStart;
        console.log("FETCH TIME: " + fetchTime);
        console.log("SET STATE TIME: " + setStateTime);
        console.log("RENDER TIME: " + renderTime);
        this.setState({ renderTime, setStateTime });
      });
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  };
  

  render() {
    const { results, loading, error, renderTime, setStateTime } = this.state;
    return (
      <TweetView
        loading={loading}
        error={error}
        onSubmit={this.handleSubmit}
        setStateTime={setStateTime}
        renderTime={renderTime}
        results={results}
      />
    );
  }
}

export default TweetPresenter;
