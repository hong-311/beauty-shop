// Product.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialBests } from './BestData';
import styled from 'styled-components';

const ProductBlock = styled.div`
  padding: 16px;
  margin: 16px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
    width: 460px;
    height: 460px;
    margin-top: 12px;
  }
`;

const DescriptionBlock = styled.div`
  margin-top: 12px;

  p {
    margin-bottom: 8px;
  }
`;

const QuantityBlock = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 18px;
    padding: 8px;
    margin: 0 8px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
  }

  span {
    font-size: 18px;
    margin: 0 12px;
  }
`;

const TotalBlock = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  button {
    font-size: 20px;
    padding: 12px 24px;
    margin: 0 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
`;

const BuyNowButton = styled.button`
  background-color: #e51a92;
  color: #fff;
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
`;

function Product({ cartItems, setCartItems }) {
  const { id } = useParams();
  const selectedProduct = initialBests.find((product) => product.id === parseInt(id));

  const { name, image, descript, price } = selectedProduct;

  const [count, setCount] = useState(1);

  const handleCount = (type) => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  const totalAmount = price * count;

  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      price: selectedProduct.price,
      quantity: count,
    };

    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
    console.log('상품이 장바구니에 추가되었습니다:', productToAdd);
  };

  return (
    <ProductBlock>
      <h2>{name}</h2>
      <img src={image} alt="상품이미지" />
      <DescriptionBlock>
        {descript && <p>{descript}</p>}
        <p>￦ {price.toLocaleString()}</p>
      </DescriptionBlock>
      <QuantityBlock>
        <button onClick={() => handleCount('minus')}>-</button>
        <span>{count}</span>
        <button onClick={() => handleCount('plus')}>+</button>
      </QuantityBlock>
      <TotalBlock>총 수량: ￦ {totalAmount.toLocaleString()}</TotalBlock>
      <ButtonsBlock>
        <BuyNowButton className="buy-now">바로구매</BuyNowButton>
        <AddToCartButton className="add-to-cart" onClick={handleAddToCart}>
          장바구니에 추가
        </AddToCartButton>
      </ButtonsBlock>
    </ProductBlock>
  );
}

export default Product;
