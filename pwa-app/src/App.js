import React from 'react';
import MyComponent from './js/view/MyComponent';
import ImageSearchForm from './js/view/ImageSearchForm';
import WeatherPresenter from './js/Presenter/WeatherPresenter';
import ImageSearchPresenter from './js/Presenter/ImageSearchPresenter';
import TweetPresenter from './js/Presenter/TweetPresenter';
import TextSearchPresenter from './js/Presenter/TextSearchPresenter';
import TextSearchView from './js/view/TextSearchView';
import CameraPresenter from './js/Presenter/CameraPresenter';
import GeolocationPresenter from './js/Presenter/GeolocationPresenter';

function App() {

  return (
    <div>
      <TweetPresenter></TweetPresenter>
    </div>
  );
}

export default App;
