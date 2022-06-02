import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import loginpic from "../components/img/login.svg"
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='log'><h1 className='h1'>Sign In</h1>
        
        <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    
    <Button variant="primary" type="submit">
      Submit
    </Button>{' '}
    <Button className='bt' variant="danger" type="submit" onClick={()=>navigate("/reg")}>
      New Registration
    </Button>
  </Form>
  
    </div>
    <div className='logimg'>
    <figure>
    <img src={loginpic} alt='login pic'/>      
    </figure>  
    </div> 

    
    
    </>
  )
}

export default Login