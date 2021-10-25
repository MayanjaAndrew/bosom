import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import './navigation.css'

function Navbar() {
  const test = () => {
    document.getElementById('navigation').style.width='100%';
    document.getElementById('navigation-notes').style.transform = 'scaleZ(1)'
    document.getElementById('navigation-tabs-toggle-button').style.display =
      'none'
    document.getElementById('navigation-tabs-toggle-button-one').style.display =
      'block'
  }
  const tes = () => {
     document.getElementById('navigation').style.width='5rem';
    document.getElementById('navigation-notes').style.transform = 'scaleZ(0)'
    document.getElementById('navigation-tabs-toggle-button').style.display =
      'block';
    
    document.getElementById('navigation-tabs-toggle-button-one').style.display =
      'none'
  }
  return (
    <Container fluid id="navigation">
      <div id="navigation-tabs-toggle" class="navigation-tabs-toggle">
        <button
          onClick={test}
          class="navigation-tabs-toggle-button"
          id="navigation-tabs-toggle-button"
        >
        </button>

        <button
          onClick={tes}
          class="navigation-tabs-toggle-button-one"
          id="navigation-tabs-toggle-button-one"
        >
        </button>
      </div>

      <Container fluid id="navigation-notes">
        <div id="navigation-notes-pad">
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </Container>
      <Container fluid id="navigation-tabs">
        <div class="navigation-main">
          <div class="contents">
            <Button id="testy">Not</Button>
          </div>
          <div class="contents">
            <Button>Not</Button>
          </div>
          <div class="contents">
            <Button>Not</Button>
          </div>
          <div class="contents">
            <Button>Not</Button>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Navbar
