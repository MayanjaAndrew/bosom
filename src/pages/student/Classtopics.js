import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from '../VIP/Navbar';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import robot from "../media/robotics.jpg";
import "./Classtopics.css";

function Classtopics() {
    return (
        <>
        <Container fluid id="container-topics">
        <div className="container-left-spacer"></div>

        <div className="container-topic-list">
        <div className="div-topics-list">
        <div className="div-topics-list-inside">
             <Card id="card-topics" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>
            <div className="card-img-details">
              <Card.Body>
                <Card.Title>Class</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Robotics
                </Card.Subtitle>
                <Card.Text>
                  Robotics explores the world of automation and IOT
                </Card.Text>
                 <Button variant="primary">Start Class</Button>
              </Card.Body>
            </div>
          </Card>
          
           <Card id="card-topics" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>
            <div className="card-img-details">
              <Card.Body>
                <Card.Title>Class</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Robotics
                </Card.Subtitle>
                <Card.Text>
                  Robotics explores the world of automation and IOT
                </Card.Text>
                 <Button variant="primary">Start Class</Button>
              </Card.Body>
            </div>
          </Card>

           <Card id="card-topics" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>
            <div className="card-img-details">
              <Card.Body>
                <Card.Title>Class</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Robotics
                </Card.Subtitle>
                <Card.Text>
                  Robotics explores the world of automation and IOT
                </Card.Text>
                 <Button variant="primary">Start Class</Button>
              </Card.Body>
            </div>
          </Card>

           <Card id="card-topics" style={{ width: '100%' }}>
            <div className="card-img-contain">
              <Card.Img variant="top" src={robot} id="card-img" rounded />
            </div>
            <div className="card-img-details">
              <Card.Body>
                <Card.Title>Class</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Robotics
                </Card.Subtitle>
                <Card.Text>
                  Robotics explores the world of automation and IOT
                </Card.Text>
                 <Button variant="primary">Start Class</Button>
              </Card.Body>
            </div>
          </Card>
        </div>
           
        </div>
       </div>
        </Container>
        <Navbar/>
        </>
    )
}

export default Classtopics

