import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialBests } from './BestData';
import styled from 'styled-components';
import CartAlert from './cart/CartAlert';

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
  const product = initialBests.find((p) => p.id === parseInt(id));

  const { name, image, descript, price } = product;

  // 장바구니에 이미 있는 상품이면 해당 상품의 수량을, 없으면 기본값 1로 초기화
  const existingItem = cartItems.find((item) => item.id === product.id);
  const initialCount = existingItem ? existingItem.quantity : 1;

  const [count, setCount] = useState(initialCount);

  // 상품 수량 조절 함수
  const handleCount = (type) => {
    if (type === 'plus') {
      setCount((prevCount) => prevCount + 1);
    } else {
      // 수량이 1 이상일 때만 감소하도록 처리
      if (count === 1) return;
      setCount((prevCount) => prevCount - 1);
    }
  };

  const totalAmount = price * count; // 총 가격 계산

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // 장바구니에 상품 추가 함수
  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // 이미 장바구니에 있는 상품이면 수량을 업데이트
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + count } : item
      );
      setCartItems(updatedItems);
    } else {
      // 장바구니에 없는 상품이면 새로 추가
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: count,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    setIsAddedToCart(true);

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
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
      <TotalBlock>총 상품 금액: ￦ {totalAmount.toLocaleString()}</TotalBlock>
      <ButtonsBlock>
        <BuyNowButton className="buy-now">바로구매</BuyNowButton>
        <AddToCartButton className="add-to-cart" onClick={handleAddToCart}>
          장바구니에 추가
        </AddToCartButton>
      </ButtonsBlock>
      {isAddedToCart && <CartAlert />}
    </ProductBlock>
  );
}

export default Product;
