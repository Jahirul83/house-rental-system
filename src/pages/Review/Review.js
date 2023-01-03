import React, { useContext } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { AuthContext } from '../../components/contexts/UserContext';
import review from '../images/review.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Review = () => {

  const { user } = useContext(AuthContext);

  const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;



    const reviews = { name, email, review };
    console.log(reviews);
    fetch('http://localhost:5000/addreview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
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
    <form onSubmit={handleReview} className="d-flex flex-column gap-2 mx-auto bg-primary p-5 rounded my-5 bg-opacity-25 addreview-design" style={{ width: "50%" }}>
      <div className="d-flex justify-content-center">
        <h1 className="AddService">Add review</h1>
      </div>
      <div className="d-flex flex-column gap-1">
        <label>Name</label>
        <input
          className="input-design"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Email</label>
        <input
          className="input-design"

          name="email"
          type="email"
          placeholder="Enter email"
          defaultValue={user?.email}
          required
        />
      </div>

      <div className="d-flex flex-column gap-1">
        <label>Review</label>
        <textarea
          className="input-design"
          rows="3"
          name="review"
          type="textarea"
          placeholder="write your review"
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

export default Review;