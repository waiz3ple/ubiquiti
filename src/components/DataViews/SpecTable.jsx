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
    line, product, shortnames, icon, unifi, fcc, ic, usip
  
  } = props.device;
  return (
    <Spec>
      <div className="img-wrapper">
        <img src={`https://static.ui.com/fingerprint/ui/icons/${icon.id}_257x257.png`} alt={product.name}/>
      </div>
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Product line</td>
              <td>{line.name}</td>
             </tr>
             <tr>
              <td>ID</td>
              <td>{line.id}</td>
            </tr>
             <tr>
              <td>Name</td>
              <td>{product.name}</td>
            </tr>
             <tr>
              <td>Short name</td>
              <td>{shortnames[0]}</td>
            </tr>
             
             {unifi && 
             <><tr>
              <td>Adoptability</td>
              <td>{unifi?.adoptability ||'Unknown'}</td>
            </tr><tr>
                <td>Protect (FOV)</td>
                <td>{unifi?.protect?.fov || 'unknown'}</td>
              </tr>
              </>}

            {fcc && 
             <tr>
              <td>FCC</td>
              <td>{fcc ||'Unknown'}</td>
            </tr>}

            {ic && 
             <tr>
              <td>IC</td>
              <td>{ic ||'Unknown'}</td>
            </tr>}
            
            {usip && 
            <><tr>
              <td>Name Lagacy</td>
              <td>{usip?.nameLegacy.join(' ') || 'unknown'}</td>
            </tr>
            <tr>
              <td>Firmware Platform</td>
              <td>{usip?.firmware?.platform || 'unknown'}</td>
            </tr>
            <tr>
              <td>Firmware Board</td>
              <td>{usip?.firmware?.board || 'unknown'}</td>
            </tr>
            </>}
          </tbody>
        </table>
    </Spec>
  )
}

export default SpecTable
