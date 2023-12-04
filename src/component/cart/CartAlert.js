import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: #4CAF50;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-top: 16px;
  border-radius: 4px;
`;

const GoToCartButton = styled(Link)`
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
`;

function CartAlert(props) {
  return (
    <AlertContainer>
      상품이 장바구니에 추가되었습니다!
      <GoToCartButton to="/cart">
        장바구니로 이동
      </GoToCartButton>
    </AlertContainer>
  );
}

export default CartAlert;
