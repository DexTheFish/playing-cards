import React from "react";

export default function Footer(props) {
  
  const handleClick = () => {
    props.setState({suit: "hearts", rank: "king"});
  }


  return (
    <footer className="App-footer">
      <a href="https://www.dexthefish.com">dexthefish</a>
      <button onClick={handleClick}>get a card</button>
    </footer>
  )
}