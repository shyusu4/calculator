/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
