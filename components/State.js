import React, { Component } from 'react';

class State extends Component {
	constructor(){
		super()
		this.state = {
			messages: 'Welcome State',
			count: 0,
			countFive:0,
		}
	}
	changeMessages(){
		this.setState({
			messages: 'Thank for subscribing'
		})
	}
	changeCount(){
		this.setState({
			count: this.state.count + 1,
		}, function(){
			console.log(this.state.count);
		})
	}
	changeCountFive(){
		// this.setState({
		// 	countFive: this.state.countFive + 1,
		// }, function(){
		// 	console.log(this.state.countFive);
		// })
		this.setState(prevState => ({
			countFive: prevState.countFive +1
		}),function(){
			console.log(this.state.countFive)
		})
	}
	incrementFive(){
		this.changeCountFive();
		this.changeCountFive();
		this.changeCountFive();
		this.changeCountFive();
		this.changeCountFive();
	}
	render(){
		return (
			<div>
				<h1>{this.state.messages}</h1>
				<h1>Count - {this.state.count}</h1>
				<h1>CountFive - {this.state.countFive}</h1>
				<button onClick={ () => this.changeMessages() } >Subscribe</button>
				<button onClick={ () => this.changeCount() } >count</button>
				<button onClick={ () => this.incrementFive() } >countFive</button>
			</div>
		)
	}
}

export default State;