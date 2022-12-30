import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/ReviewCard';

const ShowReview = () => {

    const [showReview, setShowReview] = useState([]);
    console.log(showReview)
    useEffect(() => {
        fetch('http://localhost:5000/addreview')
            .then(res => res.json())
            .then(data => setShowReview(data));
    }, []);

    return (
        <div className='servcesBG'>
        <div className='d-flex flex-wrap gap-5 justify-content-center'>
            {
                showReview.map(review => <Cards 
                    key={review._id}
                    review={review}

                ></Cards>)
            }
        </div>
    </div>
    );
};

export default ShowReview;