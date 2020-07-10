import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/home" render={() => (<Home />)}/>
          <Route path="/login" render={() => (<Login />)}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
