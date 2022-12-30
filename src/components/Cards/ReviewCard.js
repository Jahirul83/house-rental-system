import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {


    return (
        <div>
            <Card className='review-card-design' style={{higt:"500px" , width:"30vw"}}>
                <Card.Body>
                    <Card.Title className='d-flex mt-2'>
                        <div>
                            <img src="https://aatapi.org/wp-content/uploads/2020/02/user.jpg" style={{ width: "80px" }} alt="" />
                        </div>
                        <div className='mt-4'>
                            {review.name}
                        </div>
                    </Card.Title>
                    <Card.Text className='mb-3'>
                        {review.review}
                    </Card.Text>

                </Card.Body>
                <div class="row mb-3 ms-2">
                    <div class="col-8">
                        <i class="far fa-thumbs-up"></i><span>{' '}</span>
                        <i class="far fa-comment-dots"></i>
                    </div>
                    <div class="col-4">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default ReviewCard;