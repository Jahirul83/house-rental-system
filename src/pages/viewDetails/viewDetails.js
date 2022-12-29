import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const ViewDetails = (props) => {


    return (
        <div>
            <img src={props.viewData.image} alt="" width="500" height="600"></img>
            <h1>This is {props.viewData.title}</h1>
        </div>
    );
};

export default ViewDetails;