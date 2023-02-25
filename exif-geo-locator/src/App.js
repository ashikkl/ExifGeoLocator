import Header from './components/Header';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import Add from './components/Add';
import CardCollection from "./components/CardCollection";
import AddBar from './components/AddBar';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App-header">
      <Header />
      <CardCollection />
      <AddBar />
      <ScrollButton />
      <Add />
      <Footer />
    </div>
  );
}

export default App;