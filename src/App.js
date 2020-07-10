import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
    </div>
  );
}

export default App;
