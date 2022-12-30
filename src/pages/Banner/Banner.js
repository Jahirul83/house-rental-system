import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='px-3 rounded mt-3'>
        <Carousel rounded={5}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://c0.wallpaperflare.com/preview/677/401/219/indoors-furniture-room-window.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To House Rental Website</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Apartment searching can be exciting for tenants — it’s an opportunity for them to upgrade their life.</h3>
                    <p>We live in the age of the internet and if you don’t market your rental online, you will shrink your pool for potential applicants significantly because most renters search online to find their next home. Fortunately, there are a plethora of online resources you can use to market your rental property. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c0.wallpaperflare.com/preview/628/155/596/apartment-architecture-bookcase-bookshelves.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>To make sure you find the perfect apartment for your needs, it’s important to conduct a thorough search if you want to find a great apartment. </h3>
                    <p>
                        
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;