import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0de2a7b9ccmsh7673471c80f80c2p164149jsn52836f6b3351',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };

    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/SpellCheck?text=teylor%20swiift', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render() {
    return (
      null
    );
  }
}

export default MyComponent;