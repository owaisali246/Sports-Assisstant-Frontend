import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
