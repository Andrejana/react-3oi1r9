
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {GetMovies} from './App.js'
import {Header} from './App.js'


function App() {
  return (
    <div>
      <Header></Header>
      <GetMovies></GetMovies>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
