import React from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='contact-design'>
            <Card className='contact-card'>
                <p class="h1 mt-5 fw-bold d-flex justify-content-center">Review</p>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Name" required />
                            <Form.Label className='mt-3'>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Comments</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <div class="col-md-12 text-center">
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;