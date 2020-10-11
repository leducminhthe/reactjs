import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'React'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifcycleA get DerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA ComponentDidmount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'codevolution'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>  
                <button onClick={this.changeState}>Change State</button>   
                <LifecycleB />
            </div>
            
        )
    }
}

export default LifecycleA
