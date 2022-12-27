import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./AddRent.css";






const AddRent = () => {

  const handleAddRent = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const address = form.address.value;
    const bedroom = form.bedroom.value;
    const washroom = form.washroom.value;
    const dining = form.dining.value;
    const rent = form.rent.value;
    const contact = form.contact.value;


    const service = { title, image, address, bedroom, washroom, dining, rent, contact };

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {


        form.reset();
      })

  }

  return (
    <form onSubmit={handleAddRent} className="d-flex flex-column gap-2 mx-auto bg-primary p-5 rounded my-5 bg-opacity-25" style={{ width: "50%" }}>
      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Image</label>
        <input
          name="image"
          type="text"
          placeholder="Enter image"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Address</label>
        <input
          name="address"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="bedroom"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="washroom"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="dining"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="rent"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input
          name="contact"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <input className="btn btn-primary w-50 mx-auto" type="submit" value="Add" />

    </form>
  );
};

export default AddRent;
