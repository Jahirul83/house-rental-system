import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../components/Cards/Cards";
import ReviewCard from "../components/Cards/ReviewCard";
import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import './HomePage.css';
import Services from "./Services";
import ShowReview from "./ShowReview/ShowReview";
const HomePage = (props) => {

    const [services, setService] = useState([]);
    const [showReview, setShowReview] = useState([]);

    const selectedServices = services?.slice(0, 3);
    const selectedReviews = showReview?.slice(0, 3);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/addreview')
            .then(res => res.json())
            .then(data => setShowReview(data));
    }, []);
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <div>
                    <div className='d-flex flex-wrap gap-5 justify-content-center my-4'>
                        {
                            selectedServices.map(service => <Cards setDetails={props.setData}
                                key={service._id}
                                service={service}

                            ></Cards>)
                        }

                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/services"><Button variant="outline-primary btn-lg">Show More</Button></Link>
                    </div>
                    <div className='d-flex flex-wrap gap-5 justify-content-center my-4'>
                        {
                            selectedReviews.map(review =>
                                <ReviewCard
                                    key={review._id}
                                    review={review}
                                ></ReviewCard>
                            )
                        }
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/showreview"><Button variant="outline-primary btn-lg">Show More</Button></Link>
                    </div>
                    <div>
                        <FAQ />
                    </div>
                </div>
            </div>
        </div>

    );

};

export default HomePage;