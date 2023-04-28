import React from 'react';
import MyComponent from './js/view/MyComponent';
import ImageSearchForm from './js/view/ImageSearchForm';
import WeatherPresenter from './js/Presenter/WeatherPresenter';
import ImageSearchPresenter from './js/Presenter/ImageSearchPresenter';
import TweetPresenter from './js/Presenter/TweetPresenter';
import TextSearchPresenter from './js/Presenter/TextSearchPresenter';
import TextSearchView from './js/view/TextSearchView';

function App() {

  return (
    <div>
      <TextSearchPresenter></TextSearchPresenter>
    </div>

  );
}

export default App;
