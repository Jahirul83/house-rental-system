import React from "react";
import './HomePage.css';
import Services from "./Services";
//test
const HomePage = () => {
    return (
        <section id="page-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="home-banner-search">
                            <div className="row">
                                <div className="container">
                                    <div className="row align-self-center justify-content-center">
                                        <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10 col-xxl-8">
                                            <h2 className="text-center">Search properties for sale and for rent in Bangladesh</h2>
                                            <form method="POST" className="home-search-form" id="home-search-form">
                                                <input type="hidden" name="_token" />
                                                <div className="row justify-content-center">
                                                    <div className="col-sm-3 form-group">
                                                        <input type="text" name="address" className="form-control place-autocomplete" placeholder="Address, City, Zip" />
                                                    </div>
                                                    <div className="col-sm-3 form-group">
                                                        <select name="property_purpose_id" className="form-select" >
                                                            <option value="">Any</option>
                                                            <option value="1">For Rent</option>
                                                            <option value="2">For Sale</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-3 form-group">
                                                        <select name="property_type_id" className="form-select">
                                                            <option value="">Any</option>
                                                            <option value="1">Apartment/Flats</option>
                                                            <option value="2">Independent House</option>
                                                            <option value="3">Duplex Home</option>
                                                            <option value="4">Studio Apartment</option>
                                                            <option value="5">Sublet/Room</option>
                                                            <option value="6">Guest House</option>
                                                            <option value="7">Plot</option>
                                                            <option value="8">Showroom / Shop / Restaurant</option>
                                                            <option value="9">Office space</option>
                                                            <option value="10">Agriculture / Farm Land</option>
                                                            <option value="11">Industrial Space</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-2 d-grid form-group">
                                                        <button className="btn btn-primary btn-block" id="place-search-btn" type="submit">Search</button>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Services/>
            </div>
        </section>
    );

};

export default HomePage;