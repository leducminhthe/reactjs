import React, {Component} from 'react';

class Conditions extends Component{

	constructor(props){
		super(props)
		this.state = {
			isLoggin: true
		}
	}

	render(){
		let messages
		if (this.state.isLoggin) {
			messages = <div>true</div>
		} else {
			messages = <div>false</div>
		}
	  	
	  	// return (
	  	// 	<div >
	  	// 		{messages}
	  	// 	</div>
	  	// )

	  	return this.state.isLoggin ? 
	  		( <div>True</div> ) :
	  		( <div>False</div> )
	}
}

export default Conditions;