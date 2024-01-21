import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: #FFE8F7;
  color: #333;
  text-align: center;
  font-weight: bold;
  padding: 20px; 
  margin-top: 16px;
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const GoToCartButton = styled(Link)`
  background-color: #333;
  color: #fff;
  font-weight: normal;
  padding: 12px 20px; 
  margin-top: 12px; 
  margin-left: 16px; 
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #e51a92; 
  }
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
