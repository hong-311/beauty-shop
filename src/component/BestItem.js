import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";

const HoverBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 50px 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.3s;

  h3 {
    height: 70px;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
  }
  h4 {
    height: 70px;
    font-size: 19px;
  }
  h5 {
    height: 50px;
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  > svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    margin: 0 auto;
    width: 20px;
    height: 20px;
  }
`;

//li요소 선택
const BestItemBlock = styled.li`
  float: left;
  width: 270px;
  height: 270px;
  margin: 10px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    &:hover {
      ${HoverBox} {
        opacity: 1;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const LikeBox = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 100;
  > svg {
    width: 24px;
    height: 24px;
    fill: #e51a92;
  }
`;

//리스트 한개를 구현할 컴포넌트
function BestItem({id, name, price, descript, image, like, onToggle}) {
  const handleLikeClick = (e) => {
    e.preventDefault() 
    onToggle(id);
  }; 
  return (
      <BestItemBlock>
          <a href="#!">
              <img src={image} alt={name} />
              <LikeBox onClick={handleLikeClick}>
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </LikeBox>
              <HoverBox>
                  <h4>{name}</h4>
                  <h5>￦ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                  <p>{descript}</p>
              </HoverBox>
          </a>
      </BestItemBlock>
    );
}

export default BestItem;