import React from 'react';
import styled from 'styled-components';

const CartHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(245, 245, 245, 0.9); 
    padding: 15px;
    margin-bottom: 18px;
    width: 100%;
    border-radius: 5px;

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      color: #333;

      &:first-child {
        margin-left: 80px;
      }

      &:nth-child(2) {
        margin-left: 170px;
      }
    }
   
    p {
      cursor: pointer;
      color: #e51a92;
      font-weight: bold;
    }
  }
`;

function ShoppingCartHeader() {
  return (
    <CartHeaderBlock>
      <div>
        <span>상품정보</span>
        <span>수량</span>
        <span>상품금액</span>
        <p>전체선택</p>
      </div>
    </CartHeaderBlock>
  );
}

export default ShoppingCartHeader;
