import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'
import './navigation.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {bg:'rgb(56,0,60)'}
  }
  

  componentDidMount(){
    document.getElementById("navigation-tabs").style.background=`${this.props.bg}`;
  }
  
render(){
  return (
    <Container fluid id="navigation">
      <Container fluid id="navigation-tabs">
        <div class="navigation-main">
          <div class="contents">
          <div>
             <i class="fas fa-home"></i>
            <p id="icon-name">Home</p>
          </div>       
          </div>
          <div class="contents">
          <div>
              <i class="fas fa-book"></i>
            <p id="icon-name">Notes</p>
          </div>
          
          </div>
          <div class="contents">
          <div>
            <i class="far fa-chart-bar"></i>
            <p id="icon-name">Analytics</p>
          </div>
            
          </div>
          <div class="contents">
          <div>
             <i class="far fa-window-restore"></i>
            <p id="icon-name">Resources</p>
          </div>
           
          </div>
        </div>
      </Container>
    </Container>
  )
}}

export default Navbar
