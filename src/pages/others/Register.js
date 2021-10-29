import React from 'react';
import "./register.css";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Logo from '../media/Real MyBosom Logo 2nd Draft Trans.png';

function Register() {
    return (
      <section class="signin__section">
        <Container className="contain"  id="sigin_container">
        <div class="logos">
          <div className="signin-image">
          <img src={Logo}></img>
        </div> 
        </div>
        <h4 class="h4">Create your Account</h4>

     <form>
   
      <div className="form-group">
     <input type="email" className="form-control" placeholder="Email" id="email"/>
     </div>
    <div className="form-group">
    <input type="password" className="form-control" placeholder="Password" id="pwd"/>
     </div>
     <div className="form-group">
    <input type="password" className="form-control" placeholder="Confirm Password" id="pwd"/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <Button type="submit" className="button" id="siginin-button">Sign Up</Button>
  </form>

  <p class="signin-p">-Or sign up with-</p>

  <div class="signin-opts">
   <div class="signin-opt"></div>
  </div>
 </Container>
      </section>

    )
}

export default Register
