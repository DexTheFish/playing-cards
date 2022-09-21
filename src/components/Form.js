import React from "react";

export default function Form(props) {

  const handleClick = () => {
    props.setState({suit: "hearts", rank: "king"});
  }
  const handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted ');
  }



  return (
    <form onSubmit={handleSubmit}>
    <label>
      Suit:
      <input type="text" placeholder="spades" value={1} onChange={handleChange} />
    </label>
    <label>
      Rank:
      <input type="text" placeholder="ace" value={1} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}