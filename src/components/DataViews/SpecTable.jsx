import React from 'react';
import styled from 'styled-components';

const Spec = styled.div`
     display: grid;
     grid-template-columns: 2fr 5fr;
    
     & .img-wrapper {
          & img {
            width: 60%;
            display: block;
            margin: auto;
            @media (max-width: 600px){
              width: 100%;
            }
          }
     }

     & .spec-table{
        width: 50%;
        @media (max-width: 800px){
          width: 100%;
        }
        border-collapse: collapse;
     
         & > tbody  tr{
            display: grid;
            grid-template-columns: repeat(2,  1fr);
            
            & td{
              display: grid;
              padding: .5rem 0rem;
              &:last-child{
                 justify-items: end;
              }
              &:first-child{
                 justify-items: start;
              }
            }
           
          }
        & tbody > tr:not(:last-child){
          border-bottom: 1px solid var(--color-grey-3);
        } 
      }
`;

  function SpecTable(props) {
  const {
    line,
    product,
    shortnames,
    icon,
    unifi,
    fcc,
    ic,
    usip
  } = props.device;

  return (
    <Spec>
  <div className="img-wrapper" aria-hidden="true">
    {/* Image */}
    <img src={`https://static.ui.com/fingerprint/ui/icons/${icon.id}_257x257.png`} alt={product.name} />
  </div>
  <table className="spec-table">
    <tbody>
      {/* Product Line */}
      <tr>
        <td>Product line</td>
        <td>{line.name}</td>
      </tr>
      {/* ID */}
      <tr>
        <td>ID</td>
        <td>{line.id}</td>
      </tr>
      {/* Name */}
      <tr>
        <td>Name</td>
        <td>{product.name}</td>
      </tr>
      {/* Short Name */}
      <tr>
        <td>Short name</td>
        <td>{shortnames[0]}</td>
      </tr>
      {/* Unifi */}
      {unifi && (
        <>
          {/* Adoptability */}
          <tr>
            <td>Adoptability</td>
            <td>{unifi?.adoptability || 'Unknown'}</td>
          </tr>
          {/* Protect (FOV) */}
          <tr>
            <td>Protect (FOV)</td>
            <td>{unifi?.protect?.fov || 'Unknown'}</td>
          </tr>
        </>
      )}
      {/* FCC */}
      {fcc && (
        <tr>
          <td>FCC</td>
          <td>{fcc || 'Unknown'}</td>
        </tr>
      )}
      {/* IC */}
      {ic && (
        <tr>
          <td>IC</td>
          <td>{ic || 'Unknown'}</td>
        </tr>
      )}
      {/* USIP */}
      {usip && (
        <>
          {/* Name Legacy */}
          <tr>
            <td>Name Legacy</td>
            <td>{usip?.nameLegacy || 'Unknown'}</td>
          </tr>
          {/* Firmware Platform */}
          <tr>
            <td>Firmware Platform</td>
            <td>{usip?.firmware?.platform || 'Unknown'}</td>
          </tr>
          {/* Firmware Board */}
          <tr>
            <td>Firmware Board</td>
            <td>{usip?.firmware?.board || 'Unknown'}</td>
          </tr>
        </>
      )}
    </tbody>
  </table>
</Spec>

  );
}


export default SpecTable
