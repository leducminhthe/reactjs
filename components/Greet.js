import React from 'react';

function Greet(props) {
  return (
    <div>
      <h1>Hello {props.name} the hero {props.heroname}</h1>
    </div>
  );
}

export default Greet;