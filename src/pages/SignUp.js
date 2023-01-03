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
        alert('Registration successfull')
        navigate('/login')
      })
      .catch(error => {
        console.error(error)
        alert('Somethings is wrong! try again please.')
      })

  }
  return (
    <div className="SignUpCard">
      <Card className="cardDesignofsignup my-3" >
      <p class="h1 mt-5 fw-bold d-flex justify-content-center">Sign Up</p>
        <Card.Body>
          <Form onSubmit={SignUp}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' type="text" placeholder="Name" required/>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name='username' type="text" placeholder="Username" required/>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" required/>
               <Form.Text className="text-muted">
                Password atleast 6 charachter or number
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Retype-Password</Form.Label>
              <Form.Control name='confirm' type="password" placeholder="Retype-Password" required/>
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
