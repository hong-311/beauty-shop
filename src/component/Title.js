import React from 'react';
import styled from "styled-components";

const TitleBlock = styled.h1`
  height: 70px;
  font-size: 20px;
  line-height: 70px;
  text-align: center;
  margin-bottom: 40px;
`;

function Title({name}) {
  return (
    <TitleBlock>
      <h2>{name}</h2>
    </TitleBlock>
  );
}

export default Title;