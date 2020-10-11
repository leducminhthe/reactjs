import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'React'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'React'
            })
        }, 2000 )
    }
    render() {
        // console.log('*************Parent Comp render********************')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
