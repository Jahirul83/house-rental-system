import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';
import './Login.css';


const auth = getAuth(app);


const Login = () => {

  const navigate = useNavigate()


  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handelLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        alert('Login successfull')
        navigate(from, { replace: true })
      })
      .catch(error =>{
        alert('Wrong email or pass')
        console.error(error)
      })
  }
  return (
    <div className="logincard">
      <Card className="cardDesign mt-5 mb-5" >
      <p class="h1 mt-5 fw-bold d-flex justify-content-center">Log in</p>
        <Card.Body>
          <Form onSubmit={handelLogin}>
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <div class="col-md-12 text-center">
              <Button variant="success" type="submit">
                Login
              </Button>
            </div>
            <Form.Text>
              Don't have an account? Please <Link to='/SignUp'>Sign Up</Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login


