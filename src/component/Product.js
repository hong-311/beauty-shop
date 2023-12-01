import React from 'react';
import { useParams } from 'react-router-dom';
import { initialBests } from './BestData';
import styled from 'styled-components';

const ProductBlock = styled.div`
padding: 16px;
margin: 16px;
text-align: center;

h2 {
  color: #333;
}

img {
  max-width: 100%;
  width: 460px;
  height: 460px;
  margin-top: 12px;
}

div {
  margin-top: 12px;

  p {
    margin-bottom: 8px;
  }
}
`;

function Product() {
  const { id } = useParams();
  const selectedProduct = initialBests.find(product => product.id === parseInt(id));

  const { name, image, descript, price } = selectedProduct;

  return (
    <ProductBlock>
      <h2>{name}</h2>
      <img src={image} alt="상품이미지" />
      <div>
        {descript && <p>{descript}</p>}
        <p>￦ {price.toLocaleString()}</p>
      </div>
    </ProductBlock>
  );
}

export default Product;
