import React from 'react';
import '../scss/bestitem.scss';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//리스트 한개를 구현할 컴포넌트
function BestItem({id, name, price, descript, image, like, onToggle}) {
    return (
        <li>
            <a href="#!">
                <img src={image} alt={name} />
                <div className="likebox" onClick={() => onToggle(id)}>
                    { like ? <AiFillHeart /> : <AiOutlineHeart /> }
                </div>
                <div className="box">
                    <h4>{name}</h4>
                    <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                    <p>{descript}</p>

                </div>
            </a>
        </li>
    );
}

export default BestItem;