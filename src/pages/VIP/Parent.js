import React, { Component } from 'react'
import Signin from '../others/Signin';
import Login from './Login';

class Parent extends Component {
       constructor(props) {
        super(props)
    
        this.state = {
            component : <Login/>
        }
    }
   
    componentDidMount(){
     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <Signin/> })
     }, 5000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
}
    render() {
        return this.state.component
    }
}

export default Parent

