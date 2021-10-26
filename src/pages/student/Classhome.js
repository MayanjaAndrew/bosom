import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './classhome.css'

function Classhome() {
  const open = () => {
    document.getElementById('right-spacer-notes-container').style.display = 'block'
    document.getElementById('right-spacer-container-button-one').style.display =
      'none'
    document.getElementById('right-spacer-container-button-two').style.display =
      'block'
  }
  const close = () => {
    document.getElementById('right-spacer-notes-container').style.display = 'none'
    document.getElementById('right-spacer-container-button-one').style.display =
      'block'
    document.getElementById('right-spacer-container-button-two').style.display =
      'none'
  }
  return (
    <>
      <Container fluid id="Home-container">
        <div class="left-spacer"></div>

        <div class="right-spacer-container">
          <div id="right-spacer-container-buttons">
            <button
              onClick={open}
              class="right-spacer-container-button-one"
              id="right-spacer-container-button-one"
            >
            </button>

            <button
              onClick={close}
              class="right-spacer-container-button-two"
              id="right-spacer-container-button-two"
            >
            </button>
          </div>
          <div class="right-spacer">
            <div class="right-spacer-content">
              <p>
                Hello there Hello there Hello there Hello there Hello there
                Hello there Hello there Hello there Hello there Hello there
                Hello there Hello there Hello there  Hello there Hello there Hello there
                  Hello there Hello there Hello there   Hello there Hello there Hello there
              </p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <button>Want</button>
              <Button>Want</Button>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
              <p>Hello there</p>
            </div>
            <div id="right-spacer-notes-container">
              <div id="right-spacer-notes">
                <textarea id="right-spacer-notepad" placeholder="Take notes" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Classhome
