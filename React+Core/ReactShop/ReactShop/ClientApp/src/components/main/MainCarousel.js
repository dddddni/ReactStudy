import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class MainCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel fade="true">
                    <Carousel.Item className='text-center'>
                        <img
                            width='60%'
                            src="https://app-storage-edge-005.cafe24.com/bannermanage2/morgend1/2020/11/17/bf5410645d977ab6f97d2e3a0e2880ea.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                        <img
                            width='60%'
                            src="https://app-storage-edge-005.cafe24.com/bannermanage2/morgend1/2020/11/17/c2745f8b28f58d2de00411bb29368b8d.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                        <img
                            width='60%'
                            src="https://app-storage-edge-005.cafe24.com/bannermanage2/morgend1/2020/11/17/b74c98dfe9a8b4741192e29f955a413d.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MainCarousel;
