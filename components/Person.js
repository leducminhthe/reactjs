import React from 'react';

function Person({person}) {
  	return (
    	<div>
      		<h2>{person.id}. {person.name}. {person.age}</h2> 
    	</div>
  	);
}

export default Person;