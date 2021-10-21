import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup'
import bio from '../VIP/ASEI-3D-Logo.png';
import biology from '../media/biology1.jfif'
import robot from '../media/robotics.jpg';
import thinker from '../media/thinker.jpg'
import science from '../media/5a35540277d9e6.8445514415134443544909.png'
import "./classintro.css";

function Classintro() {
    return (
        <section class="signin__section">
        <Container>
        
        <div className="container-topbar">
            <input type="text" placeholder="Search"/><Button>Search</Button>
        </div>

       
    </Container>
    <Container fluid>
    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={biology} className="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>   
   
    </Card>
    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={robot} className="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>   
   
    </Card>
    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={thinker} className="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>   
   
    </Card>
      <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={science} className="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </div>   
   
    </Card>

    </Container>
    </section>
        
    )
}

export default Classintro

