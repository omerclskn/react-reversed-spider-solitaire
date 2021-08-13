import React from 'react';
import Game from './components/Game'
import { Route, Router } from 'react-router-dom'
import FinishPage from './components/FinishPage'
import history from './components/history';

function App() {
  return (
    <div className="App">

    <Router history={history}>

      <Route exact path="/" component={Game} />

      <Route path = "/finish" component={FinishPage} />

    </ Router>

    </div>
  );
}

export default App;
