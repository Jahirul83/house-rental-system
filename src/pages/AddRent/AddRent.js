import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./AddRent.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






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
    console.log(service);
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Data inserted successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });


        form.reset();
      })

  }

  return (
    <form onSubmit={handleAddRent} className="mx-auto rounded my-3 p-5 bg-primary bg-opacity-25 addrent-design" >

      <div className="d-flex justify-content-center">
        <h1 className="AddService">Add service</h1>
      </div>
      
      <div className="d-flex flex-column gap-1">
        <label>Title</label>
        <input className="input-design"
          name="title"
          type="text"
          placeholder="Enter your House name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Image</label>
        <input
          className="input-design"
          name="image"
          type="text"
          placeholder="Enter image"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Address</label>
        <textarea
        className="input-design"
          rows="3"
          name="address"
          type="textarea"
          placeholder="Enter house address"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Bedroom</label>
        <input
          className="input-design"
          name="bedroom"
          min="1"
          max="5"
          type="number"
          placeholder="Enter num of total bedroom"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Washroom</label>
        <input
          className="input-design"
          name="washroom"
          type="number"
          min="1"
          max="5"
          placeholder="Enter num of total washroom"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Dining</label>
        <input
          className="input-design"
          name="dining"
          type="number"
          min="1"
          max="5"
          placeholder="Enter num of total dining"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Rent</label>
        <input
          className="input-design"
          name="rent"
          type="text"
          placeholder="Enter house rent"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Contact</label>
        <input
          className="input-design"
          name="contact"
          type="text"
          placeholder="Enter owner contact number"
          required
        />
      </div>

      <input className="btn btn-primary w-50 mx-auto" type="submit" value="Add" />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </form>
  );
};

export default AddRent;
