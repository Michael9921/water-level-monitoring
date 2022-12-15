import { BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App"> 
    <Navbar />
    </div>
  ); 
}

export default App;