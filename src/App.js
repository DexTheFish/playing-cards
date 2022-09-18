import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import React, {useState} from 'react';

function App() {
  const [state, setState] = useState({
    suit: "spades",
    rank: "ace"
  });
  return (
    <div className="App">
      <Header />
      <Card {...state} />
      <Footer setState={setState}/>
    </div>
  );
}

export default App;
