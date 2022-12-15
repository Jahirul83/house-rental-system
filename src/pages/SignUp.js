import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="SignUpCard">
      <Card className="cardDesignofsignup mt-3 mb-3" >
      <Card.Body>
      <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Retype-Password</Form.Label>
        <Form.Control type="password" placeholder="Retype-Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div class="col-md-12 text-center">
        <Button  variant="success" type="submit">
        Sign Up
      </Button>
      </div>
      
    </Form>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SignUp
