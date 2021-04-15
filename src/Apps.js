import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SecondApp } from './components/SecondApp/SecondApp';
import { FirstApp } from './components/FirstApp/FirstApp';
import { StartPage } from './components/StartPage/StartPage';
import './Apps.scss';

function Apps() {
  return (
    <Switch>
      <Route path="/start-page">
        <StartPage />
      </Route>

      <Route path="/first-tt-app">
        <FirstApp />
      </Route>

      <Route path="/second-tt-app">
        <SecondApp />
      </Route>

      <Redirect path="/" to="/start-page" />
    </Switch>
  );
}

export default Apps;
