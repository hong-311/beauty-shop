import React from 'react';

// Product 컴포넌트
function Product(props) {
    const { name, image, descript, price } = props;

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt='상품이미지' />
            <div>
                <p>{descript}</p>
                <p>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
        </div>
    );
}


export default Product;
