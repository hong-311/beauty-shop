import React from 'react';
import styled from "styled-components";

//스타일컴포넌트생성
const BestBoxBlock = styled.div`
  width: 1180px;
  margin: 0 auto;
  padding: 10px 10px 90px;
  box-sizing: border-box;

`;

//모든 요소를 감싸고 가운데 영역으로 모아 줄 컴포넌트
function BestBox({children}) {
    return <BestBoxBlock className="bestbox">{children}</BestBoxBlock>;
}

export default BestBox;