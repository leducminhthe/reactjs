import React, {Component} from 'react';

class Form extends Component{
	constructor (props) {
		super(props)

		this.state = {
			username:'',
			comments:'',
			topic:'',
		}
	}

	handleUserName = (event) => {
		this.setState({
			username: event.target.value
		})
	}
	handleComments = (event) => {
		this.setState({
			comments: event.target.value
		})
	}
	handleTopic = (event) => {
		this.setState({
			topic: event.target.value
		})
	}
	handleSubmit = (event) => {
		alert(`${this.state.username}. ${this.state.comments}. ${this.state.topic}`)
		event.preventDefault();
	}

	render(){
	  	return (
	  		<form action="" onSubmit={this.handleSubmit}>
		    	<div>
		      		<input type="text" onChange={this.handleUserName} value={this.state.username}/>
		    	</div>
		    	<div>
		    		<textarea 
		    		value={this.state.comments}
		    		onChange={this.handleComments}></textarea>
		    	</div>
		    	<div>	
		    		<label>Topic</label>
		    		<select value={this.state.topic} onChange={this.handleTopic}>
		    			<option value="React">React</option>
		    			<option value="Angular">Angular</option>
		    			<option value="Vue">Vue</option>
		    		</select>
		    	</div>	
		    	<button type="submit" className="btn btn-default">button</button>
		    </form>
	  	);
	}
}

export default Form;