import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="suit">
        the suit is: {props.suit}
      </div>
      <div className="rank">
        the rank is: {props.rank}
      </div>
    </div>
  )
}

