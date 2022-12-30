import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ReviewCard.css';

const ReviewCard = ({review}) => {


    return (
        <div>
        <Card className='reciew-card-design' >
           
            <Card.Body>
                <Card.Title className='fw-bold text-info'>{review.name}</Card.Title>
                <Card.Text>
                    {review.review}
                </Card.Text>
                
            </Card.Body>
        </Card>
    </div>
    );
};

export default ReviewCard;