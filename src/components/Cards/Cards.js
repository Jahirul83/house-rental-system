import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

function Cards({ service, setDetails }) {


    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const submitHandle = () => {
        setDetails(service);
        navigate("/ViewDetails");
    }
    return (
        <div>
            <Card >
                <Card.Img style={{ height: "300px", width: "29vw" }} variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title className='fw-bold text-info'>{service.title}</Card.Title>
                    <Card.Text>
                        {service.address}
                    </Card.Text>
                    <Card.Text className='fw-bold '>BDT{" "}
                        {service.rent} /Mo
                    </Card.Text>
                    {
                        user &&
                        //<Link to={`/ViewDetails/${service._id}`}> <Button variant="primary">View Deatils</Button> </Link>
                        <Button onClick={submitHandle}>View Deatils</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;