import React, { useEffect, useState } from 'react';

import Cards from '../components/Cards/Cards';
import { Container, Col, Row } from 'react-bootstrap';
import './Services.css';



const Services = (props) => {

    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);


    return (
        <div className='servcesBG my-3'>
            <div className='d-flex flex-wrap gap-5 justify-content-center'>
                {
                    services.map(service => <Cards setDetails={props.setData}
                        key={service._id}
                        service={service}

                    ></Cards>)
                }
            </div>
        </div>
    );
};

export default Services;