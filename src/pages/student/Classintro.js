import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import bio from '../media/biology1.jfif'
import robot from '../media/robotics.jpg'
import thinker from '../media/thinker.jpg'
import science from '../media/5a35540277d9e6.8445514415134443544909.png'
import add from '../media/—Pngtree—plus vector icon_4236965.png'
import logo from "../media/Real MyBosom Logo 2nd Draft Trans.png"
import './classintro.css'

function Classintro() {
  return (
    <section id="classintro-section">
      <Container fluid id="classintro-nav">
        <div className="container-topbar">
          <Navbar bg="rgb(56, 0, 60)" expand={false} id="classintro-navigation">
            <Container fluid>
              <Navbar.Brand id="navbar-brand" href="#">
                <input
                  type="text"
                  placeholder="Search"
                  id="classintro-search"
                />
                <Button id="classintro-button">
                  <i class="fas fa-search"></i>
                </Button>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" id="offcanvas-Nav-logo"/>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <img src={logo}/>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Profile</Nav.Link>
                     <Nav.Link href="#action2">messages</Nav.Link>
                      <Nav.Link href="#action2">Settings</Nav.Link>
                      <Nav.Link href="#action2">Help</Nav.Link>
                    <NavDropdown title="Account" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="#action3">
                        UserName
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Email
                      </NavDropdown.Item>
                      <NavDropdown.Divider />                      
                    </NavDropdown>
                        <Nav.Link href="#action2">LogOut</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
               
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </Container>
      <Container fluid id="container-fluid">
        <div className="container-fluid-group-one">
          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={bio} id="card-img" />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted" id="mbb-2">
                  <h6 id="mbb-2">Biology</h6>
                </Card.Subtitle>
                <Card.Text id="mb-3">
                <p id="mb-3">Biology class explores the diverse plant and animal kingdoms</p>
                </Card.Text>
                <Link to="/classtopics">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                <h6 id="mbb-2">Robotics</h6>
                </Card.Subtitle>
                <Card.Text>
                   <p id="mb-3">Robotics explores the world of automation and IOT</p>
                </Card.Text>
                <Link to="/classtopics">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
           <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                <h6 id="mbb-2">Robotics</h6>
                </Card.Subtitle>
                <Card.Text>
                   <p id="mb-3">Robotics explores the world of automation and IOT</p>
                </Card.Text>
                <Link to="/classtopics">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={thinker} id="card-img" />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  <h6 id="mbb-2">Biology</h6>
                </Card.Subtitle>
                <Card.Text>
                  <p id="mb-3">Biology class explores the diverse plant and animal kingdoms</p>
                </Card.Text>
                <Link to="/classtopics">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
        </div>

        <div className="container-fluid-group-two">
          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={science} id="card-img" />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  <h6 id="mbb-2">Biology</h6>
                </Card.Subtitle>
                <Card.Text>
                  <p id="mb-3">Biology class explores the diverse plant and animal kingdoms</p>
                </Card.Text>
                <Link to="/classtopics">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
           <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                <h6 id="mbb-2">Robotics</h6>
                </Card.Subtitle>
                <Card.Text>
                   <p id="mb-3">Robotics explores the world of automation and IOT</p>
                </Card.Text>
                <Link to="/parentone">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>

          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={add} id="card-img" />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Add Class
                </Card.Subtitle>
                <Card.Text></Card.Text>
                <Link to="/parentone">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>

          <Card id="card" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={add} id="card-img" />
            </div>

            <div className="card-img-details">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Add Class
                </Card.Subtitle>
                <Card.Text></Card.Text>
                <Link></Link>
                <Link to="/parentone">
                  <Button variant="primary" id="button-other">Start Class</Button>
                </Link>
              </Card.Body>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Classintro
