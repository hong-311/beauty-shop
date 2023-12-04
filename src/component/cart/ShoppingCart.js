import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShoppingCartBlock = styled.div`
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #f5f5f5;

  h2 {
    color: #333;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  img {
    max-width: 60px;
    height: auto;
    margin-right: 8px;
  }

  p {
    font-size: 16px;
    color: #333;
    margin: 0;
  }

  div.actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    button {
      font-size: 18px;
      padding: 8px 16px;
      margin: 0 8px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      color: #333;
    }

    .checkout {
      background-color: #e51a92;
      color: #fff;
    }

    .continue-shopping {
      background-color: #333;
      color: #fff;
    }
  }
`;

const CountButtonBlock = styled.button`
  font-size: 18px;
  padding: 8px;
  margin: 0 8px;
  cursor: pointer;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
`;

function ShoppingCart({ cartItems, handleCount, onCheckout }) {
  const [cart, setCart] = useState(cartItems);
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    return () => {
      setCart([]);
    };
  }, []);


  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <ShoppingCartBlock>
      <h2>장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <p>{item.name}</p>
                <p>￦ {item.price.toLocaleString()}</p>
              </div>

              <div>
                 <CountButtonBlock onClick={() => handleCount('minus')}>-</CountButtonBlock>
                 <span style={{ color: 'black' }}>{item.quantity}</span>
                 <CountButtonBlock onClick={() => handleCount('plus')}>+</CountButtonBlock>
              </div>

              <p>총 금액: ￦ {(item.price * item.quantity).toLocaleString()}</p>

              <button style={{ color: 'black' }} onClick={() => handleRemove(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="actions">
          <Link to='/'>
            <button className="continue-shopping">계속 쇼핑하기</button>
          </Link>

          <button className="checkout" onClick={() => onCheckout()}>주문하기</button>
        </div>
      )}
    </ShoppingCartBlock>
  );
}

export default ShoppingCart;
