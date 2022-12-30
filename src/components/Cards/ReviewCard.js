import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {


    return (
        <div>
            <Card className='review-card-design'>
                <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {review.review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;