import React, { Component } from 'react';
import CardItemDetail from './CardItemDetail';

class CardItem extends Component {
    render() {
        return (
            <div className='cardItem'>
                <img class="card-img-top" src="https://morgend.co.kr/web/product/medium/202101/90b301a83e11cce996742012e06ce58d.webp" alt="Card image" />
                <div class="card-body">
                    <span className="card-text title">Peri tweed jacket (3color)</span>
                    <hr />
                    <span class="card-text content">*문의폭주* 상큼한 컬러감의 트위드 자켓 소개해드릴께요! 하트 금장 버튼이 빈티지하면서도 러블리한 포인트가 되어주어요.</span>
                </div>
                <CardItemDetail />
            </div>
        )
    }
}

export default CardItem;
