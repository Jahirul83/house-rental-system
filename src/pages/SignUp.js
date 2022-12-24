import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';
import './SignUp.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate()
  const SignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;


    if(password!==confirm){
      alert('password dosen,t match')
      form.reset();
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset();
        navigate('/login')
      })
      .catch(error => console.error(error))

  }
  return (
    <div className="SignUpCard">
      <Card className="cardDesignofsignup mt-3 mb-3" >
        <Card.Body>
          <Form onSubmit={SignUp}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name='username' type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Retype-Password</Form.Label>
              <Form.Control name='confirm' type="password" placeholder="Retype-Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <div class="col-md-12 text-center">
              <Button variant="success" type="submit">
                Sign Up
              </Button>
            </div>
            <Form.Text>
              Already have an account? Please <Link to='/login'>Login</Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUp
