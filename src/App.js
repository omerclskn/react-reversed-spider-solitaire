import React from 'react';
import Game from './components/Pages/Game'
import { Route, Router } from 'react-router-dom'
import FinishPage from './components/Pages/FinishPage'
import history from './history';
import Rules from './components/Pages/Rules'


function App() {
  return (
    <div className="App">

    <Router history={history}>

      <Route exact path="/" component={Game} />

      <Route path = "/finish" component={FinishPage} />

      <Route path = "/rules" component={Rules} />

    </ Router>

    </div>
  );
}

export default App;
