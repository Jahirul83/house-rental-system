import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from '../contexts/UserContext';

function Cards({ service }) {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <Card >
                <Card.Img style={{ height: "200px", width: "20vw" }} variant="top" src={service.image} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                        {service.address}
                    </Card.Text>
                    <Card.Text>BDT{" "}
                        {service.rent}
                    </Card.Text>
                    {
                        user &&
                        <Button variant="primary">View Deatils</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;