import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import React, {useState} from 'react';

function App() {
  const [state, setState] = useState({
    suit: "spades",
    rank: "K"
  });
  return (
    <div className="App">
      <Card {...state} />
      <Footer setState={setState}/>
    </div>
  );
}

export default App;
