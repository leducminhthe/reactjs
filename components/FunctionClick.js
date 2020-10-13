import React from 'react';

function FunctionClick(props) {
	function change(){
		console.log('Function Clicked');
	}
  	return (
    	<div>
      		<button onClick={change}>Event</button>
    	</div>
  	);
}

export default FunctionClick;