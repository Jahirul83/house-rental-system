import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddRent.css";

const AddRent = () => {
  return (
    <div className="logincard">
      <Card className="cardDesign mt-5 mb-5">
        <Card.Body>
          <Form>

            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter your House name"
                required
              />
            </Form.Group>


            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>


            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Bad room</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter Number of bad room"
                required
              />
            </Form.Group>


            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Wash room</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter Number of wash room"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Dining room</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter Number of dining room"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Rent</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter rent of house"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasictitle">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                name="Title"
                type="text"
                placeholder="Enter Owner contact No"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div class="col-md-12 text-center">
              <Button variant="success" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddRent;
