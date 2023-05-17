import React from 'react';
import styled from 'styled-components';

const Spec = styled.div`
     display: grid;
     grid-template-columns: 2fr 5fr;
    
     //background-color: red;

     & .img-wrapper {
          //background-color: green;
          & img {
            width: 60%;
            display: block;
            margin: auto;
          }
     }

     & .spec-table{
        width: 50%;
        border-collapse: collapse;
     
         & tbody  tr{
            display: grid;
            grid-template-columns: repeat(2,  1fr);
           // background-color: red;
            
            & td{
              display: grid;
              border-bottom: 1px solid var(--color-grey-3);
              padding: .5rem 0rem;
              &:last-child{
                 justify-items: end;
              }
              &:first-child{
                 justify-items: start;
              }
              

            }
           
          }  

       
        /* &  td {
           display: grid;
           border: 1px solid var(--color-grey-3);
           text-align: left;
           padding: .5rem 2rem;
           align-content: center;
       
             &:last-child{
               justify-items: end;
              }

          } */
      }
`;
/* interface propType{
    data: object

} */

function SpecTable(props) {
   const {line, product, shortnames, icon} = props.device;
  // console.log(props)
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
            <tr>
              <td>Max. power</td>
              <td>25V</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>2400Mbs</td>
            </tr>
          </tbody>
        </table>
    </Spec>
  )
}

export default SpecTable
