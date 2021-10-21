import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import biology from '../media/biology1.jfif'
import robot from '../media/robotics.jpg';
import thinker from '../media/thinker.jpg';
import science from '../media/5a35540277d9e6.8445514415134443544909.png';
import add from '../media/—Pngtree—plus vector icon_4236965.png';
import "./classintro.css";

function Classintro() {
    return (
        <section class="signin__section">
        <Container>
        
        <div className="container-topbar">
            <input type="text" placeholder="Search"/><Button>Search</Button>
        </div>

       
    </Container>
    <Container fluid id="container-fluid">
    <div className="container-fluid-group-one">
         <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={biology} id="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>
    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={robot} id="card-img" rounded/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Robotics</Card.Subtitle>
      <Card.Text>
      Robotics explores the world of automation and IOT
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>
    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={thinker} id="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>
    </div>
   
     
    <div className="container-fluid-group-two">
         <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={science} id="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Biology</Card.Subtitle>
      <Card.Text>
      Biology class explores the diverse plant and animal kingdoms
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>

    <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={add} id="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Add Class</Card.Subtitle>
      <Card.Text>
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>

     <Card id="card" style={{ width: '100%' }}>

    <div className="card-img-contain"><Card.Img variant="top" src={add} id="card-img"/></div>

    <div className="card-img-details"> 
     <Card.Body>
      <Card.Title>Class</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Add Class</Card.Subtitle>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">Start Class</Button>
      </Card.Body>
    </div>   
   
    </Card>


    
    </div>

    </Container>
    </section>
        
    )
}

export default Classintro

