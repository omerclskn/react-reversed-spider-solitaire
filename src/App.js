import React from 'react';
import Board from './components/Board'
import { Route, Router } from 'react-router-dom'
import FinishPage from './components/FinishPage'
import history from './components/history';

function App() {
  return (
    <div className="App">

    <Router history={history}>

      <Route exact path="/" component={Board} />

      <Route path = "/finish" component={FinishPage} />

    </ Router>

    </div>
  );
}

export default App;
