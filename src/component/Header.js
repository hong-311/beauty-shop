import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi'; 
import { FaRegUser } from 'react-icons/fa6';

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  font-size: 15px;
`;

const IconsBlock = styled.div`
  font-size: 20px;
  margin-right: 50px;
  display: flex;
  gap: 30px;
  align-items: center; /* 아이콘과 텍스트를 수평으로 정렬 */
`;

// Link에 스타일을 적용한 컴포넌트 생성
const StyledLink = styled(Link)`
position: relative;

&:after {
  content: '${(props) => (props.itemCount > 0 ? props.itemCount : "")}';
  position: absolute;
  top: -10px;
  right: -22px;
  background-color: ${(props) => (props.itemCount > 0 ? '#e51a92' : 'transparent')}; /* 아이템이 있을 때만 분홍색, 없으면 투명색 */
  color: #fff;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 12px;
}
`;

// Header 컴포넌트에서 itemCount를 StyledLink로 전달
function Header({ cartItems }) {
  const itemCount = cartItems ? cartItems.length : 0;

  return (
    <HeaderBlock>
      <Link to='/'>
        <h1>B.Boutique</h1>
      </Link>
      <IconsBlock>
        <StyledLink to="/cart" itemCount={itemCount}>
          <FiShoppingCart />
        </StyledLink>
        <FaRegUser />
      </IconsBlock>
    </HeaderBlock>
  );
}

export default Header;
