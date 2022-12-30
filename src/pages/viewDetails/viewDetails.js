import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaBed, FaMobileAlt, FaToilet } from 'react-icons/fa';
import { GiKitchenScale, GiSofa } from 'react-icons/gi';
import Features from '../Features';


const ViewDetails = (props) => {


    return (
        <div className='d-flex'>
            <img className='rounded-5 mx-3 my-3' src={props.viewData.image} alt="" width="500" height="600"></img>
            <div className='mt-5'>
                <h1>Home Title: {props.viewData.title}</h1>
                <div>
                    <h3>Address: {props.viewData.address}</h3>
                    <h3>Rent BDT : {props.viewData.rent} TK</h3>
                    <div className='d-flex gap-3'>
                        <Card style={{ width: '25rem' }} className='border border-5'>
                            <Card.Body>
                                <Card.Title className='fw-bold text-info'>Details</Card.Title>
                                <Card.Text>
                                    <div className='d-flex'><h5><FaBed /> Bedroom: {props.viewData.bedroom}</h5></div>
                                    <div className='d-flex'> <h5><FaToilet />washroom: {props.viewData.washroom}</h5></div>
                                    <div className='d-flex'><h5><GiSofa /> dining: {props.viewData.dining}</h5></div>
                                    <div className='d-flex'><h5><GiKitchenScale /> Kitchen: 1</h5></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem' }} className='border border-5'>
                            <Card.Body>
                                <Card.Title className='fw-bold text-info'>Contact</Card.Title>
                                <Card.Text>
                                    <div className='d-flex'><h5>If you interested this flat for Rent</h5></div>
                                </Card.Text>
                                <Card.Text>
                                    <div className='d-flex'><h5> <FaMobileAlt />Call : {props.viewData.contact}</h5></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <h2 className='mt-5 fw-bold text-info text-center'>Features</h2>
                    <Features />
                </div>
            </div>



        </div>
    );
};

export default ViewDetails;