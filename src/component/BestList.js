import React from 'react';
import { Link } from 'react-router-dom';
import BestItem from './BestItem';
import styled from 'styled-components';

const BestListBlock = styled.ul`
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`;

function BestList({ bests, onToggle }) {
  return (
    <BestListBlock>
      {bests.map((best) => (
        <li key={best.id}>
          <Link to={`/${best.id}`}>
            <BestItem
              id={best.id}
              name={best.name}
              price={best.price}
              descript={best.descript}
              image={best.image}
              like={best.like}
              onToggle={onToggle}
            />
          </Link>
        </li>
      ))}
    </BestListBlock>
  );
}

export default BestList;
