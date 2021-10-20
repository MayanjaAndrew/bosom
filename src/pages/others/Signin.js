import React from 'react'
import "../bootstrap.css";

function Signin() {
    return (
    <>
 <section class="signin__section">
<div className="container">
  <h4>Login to your Account</h4>
  <form>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Email" id="email"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" placeholder="Password" id="pwd"/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn">SignIn</button>
</form>

    </div>
 </section>
   
    </>
    )
}

export default Signin

