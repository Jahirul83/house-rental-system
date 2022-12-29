import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='px-3 rounded mt-5'>
        <Carousel rounded={5}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://free4kwallpapers.com/uploads/originals/2016/02/14/historical-places-of-beautiful-bangladesh-wallpaper.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.f74eca515136cafe4557bf13d3555ef8?rik=FrAjbV0R%2bcfzNw&riu=http%3a%2f%2ffarm7.static.flickr.com%2f6215%2f6287806559_8cbb1c30c1_b.jpg&ehk=MAEQR6MLp8Vhm%2fFJbll%2f8ZMD%2fFB1X9qJiCBk1bdv26I%3d&risl=&pid=ImgRaw&r=0"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.o7CNAS4DpVwO3h_9BbJ40wHaEK?pid=ImgDet&w=1280&h=721&rs=1"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;