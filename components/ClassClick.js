import React, {Component} from 'react';

class ClassClick extends Component{
	change(){
		console.log('Class Clicked');
	}
	render(){
	  	return (
	    	<div>
	      		<button onClick={this.change}>ClassClick</button>
	    	</div>
	  	);
	}
}

export default ClassClick;