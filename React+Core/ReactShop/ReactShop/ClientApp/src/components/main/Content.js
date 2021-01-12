import React, { Component } from "react";
import MainCarousel from './MainCarousel';
import CardItem from './CardItem';

class Content extends Component {
    render() {
        return (
            <div className="MainContent">
                <div>
                    <MainCarousel />
                </div>
                <div class='MainText'>
                    <b>NEW ARRIVALS</b>
                    <p style={{ fontSize: '13px' }}>48시간 동안 5% 할인!</p>
                </div>
                <div className='card'>
                    <div className='row'>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;