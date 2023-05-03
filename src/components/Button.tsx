import React, { Children } from 'react';
import styled from 'styled-components';

interface buttonType{
    size?: number,
    color?: string,
    bgColor?: string,
    children?: React.ReactNode,
    onClick?: ()=> void,
    
}

const ButtonStyle = styled.button`
     background-color: var(--color-secondary);
     border-radius: .5rem;
     border: 1px solid var(--color-secondary);
    
     & > * {
        text-decoration: none;
        display: block;
        color: var(--color-white);
        padding:  1rem;
     }
`;

function Button({ size, color, bgColor, children }: buttonType){
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  );
}

export default Button
