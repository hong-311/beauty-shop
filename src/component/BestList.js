import React from 'react';
import { Link } from 'react-router-dom';
import BestItem from './BestItem';

function BestList({ bests, onToggle }) {
  return (
    <ul>
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
    </ul>
  );
}

export default BestList;
