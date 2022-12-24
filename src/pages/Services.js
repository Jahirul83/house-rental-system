import React from 'react';
import Cards from '../components/Cards/Cards';
import { Container, Col, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='cards-design'>
            <Cards img="https://placeimg.com/400/225/arch"
                title="Shoes!"
                text="If a dog chews shoes whose shoes does he choose?" />

            <Cards img="https://placeimg.com/400/225/arch"
                title="Shoes!"
                text="If a dog chews shoes whose shoes does he choose?" />

            <Cards img="https://placeimg.com/400/225/arch"
                title="Shoes!"
                text="If a dog chews shoes whose shoes does he choose?" />

            <Cards img="https://placeimg.com/400/225/arch"
                title="Shoes!"
                text="If a dog chews shoes whose shoes does he choose?" />
        </div>
    );
};

export default Services;