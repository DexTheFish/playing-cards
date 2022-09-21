import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="suit">
        the suit is: {props.suit}
        <img src={'hearts.png'} alt='spades icon' size='100' width='100' />
      </div>
      <div className="rank">
        the rank is: {props.rank}

      </div>
    </div>
  )
}

