import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../components/Cards/Cards";
import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import './HomePage.css';
import Services from "./Services";
//test
const HomePage = (props) => {

    const [services, setService] = useState([]);

    const selectedServices = services?.slice(0, 3);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        // <section id="page-banner">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-sm-12">
        //                 <div className="home-banner-search">
        //                     <div className="row">
        //                         <div className="container">
        //                             <div className="row align-self-center justify-content-center">
        //                                 <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10 col-xxl-8">
        //                                     <h2 className="text-center">Search properties for sale and for rent in Bangladesh</h2>
        //                                     <form method="POST" className="home-search-form" id="home-search-form">
        //                                         <input type="hidden" name="_token" />
        //                                         <div className="row justify-content-center">
        //                                             <div className="col-sm-3 form-group">
        //                                                 <input type="text" name="address" className="form-control place-autocomplete" placeholder="Address, City, Zip" />
        //                                             </div>
        //                                             <div className="col-sm-3 form-group">
        //                                                 <select name="property_purpose_id" className="form-select" >
        //                                                     <option value="">Any</option>
        //                                                     <option value="1">For Rent</option>
        //                                                     <option value="2">For Sale</option>
        //                                                 </select>
        //                                             </div>
        //                                             <div className="col-sm-3 form-group">
        //                                                 <select name="property_type_id" className="form-select">
        //                                                     <option value="">Any</option>
        //                                                     <option value="1">Apartment/Flats</option>
        //                                                     <option value="2">Independent House</option>
        //                                                     <option value="3">Duplex Home</option>
        //                                                     <option value="4">Studio Apartment</option>
        //                                                     <option value="5">Sublet/Room</option>
        //                                                     <option value="6">Guest House</option>
        //                                                     <option value="7">Plot</option>
        //                                                     <option value="8">Showroom / Shop / Restaurant</option>
        //                                                     <option value="9">Office space</option>
        //                                                     <option value="10">Agriculture / Farm Land</option>
        //                                                     <option value="11">Industrial Space</option>
        //                                                 </select>
        //                                             </div>
        //                                             <div className="col-sm-2 d-grid form-group">
        //                                                 <button className="btn btn-primary btn-block" id="place-search-btn" type="submit">Search</button>

        //                                             </div>
        //                                         </div>
        //                                     </form>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
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
                    <div className="d-flex justify-content-center">
                        <h4>
                            review bosabo
                        </h4>
                    </div>
                    <div>
                        <FAQ/>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default HomePage;