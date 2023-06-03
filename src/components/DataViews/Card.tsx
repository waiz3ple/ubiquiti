import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
     border: 2px solid var(--color-grey-3);
     border-radius: .8rem;
     
     & .img-wrapper{
       border-radius: .8rem .8rem 0 0;
       background: var(--color-grey-1);
        
         img{
            width: 50%;
            display: block;
            margin: auto;
         }
     }

     & .product-name{
        color: var(--color-grey-5);
        font-size: 1.2rem;
        font-weight: normal;
        padding: 2rem 1.5rem 1rem;
     }

     & .product-line{
        padding: 0 1.5rem 1rem;
        color: var(--color-grey-4);
     }
`;



interface propsType {
    imgUrl: string,
    productName:string,
    productLine: string

}

function Card({imgUrl, productName, productLine}: propsType) {
  return (
    <CardStyled>
  <div className="img-wrapper">
    <img src={imgUrl} alt={productName} />
  </div>
  <h4 className="product-name" role="heading" aria-level={2}>
    {productName}
  </h4>
  <p className="product-line">{productLine}</p>
</CardStyled>

  )
}

export default Card
