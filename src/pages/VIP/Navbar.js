import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import home from "../media/icons8-home-100.png";
import notes from "../media/icons8-notes-128.png";
import analytics from "../media/icons8-analytics-60.png";
import resources from "../media/icons8-resources-64.png";
import './navigation.css'

function Navbar() {

  return (
    <Container fluid id="navigation">
      <Container fluid id="navigation-tabs">
        <div class="navigation-main">
          <div class="contents">
            <img id="navi-images" src={home} alt="home"/>
          </div>
          <div class="contents">
            <img id="navi-images" src={notes} alt="home"/>
          </div>
          <div class="contents">
            <img id="navi-images" src={analytics} alt="home"/>
          </div>
          <div class="contents">
            <img id="navi-images" src={resources} alt="home"/>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Navbar
