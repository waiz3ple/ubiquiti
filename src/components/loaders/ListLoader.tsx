import styled from "styled-components";
import Shimmer from "./Shimmer";

const ListSkeletonStyle = styled.table`
  width: 100%;  
  border-collapse: collapse;

  & > thead > tr, tbody > tr{
     display: grid;
     grid-template-columns: 1fr 3fr 10fr;
     border-bottom: 1px solid var(--color-grey-3);
  }
     
    &  td, th  {
       display: grid;
       
       text-align: left;
       padding: .5rem 2rem; 
       align-content: center;
       
       &:first-child{
        justify-items: center;
       }

     }

     &  thead {
        & th{
          padding-bottom: .5rem;

           &:first-child{
           font-size: .9rem;
        }

        &:not(:first-child){
           font-size: 1.2rem;
           text-transform: uppercase;
          }
        }
     }

     & tbody{
       font-size: 1.1rem;
       color: var(--color-grey-3);
        & tr{
          position: relative;
          height: 3rem;
          overflow: hidden;
       }
       
       & td:first-child{
         justify-items: end;
         & div{
           width: 1.5rem;
           height: 2rem;
           background-color: currentColor;
         }
        } 


        & td:nth-child(2){
           & div {
             width: 5rem;
             height: 1.2rem;
             background-color:currentColor;
           }
        }
        
        & td:nth-child(3){
           & div {
             width: 10rem;
             height: 1.2rem;
             background-color: currentColor;
           }
        }
         
     }
`;


function ListLoader(props: { size: number }){  // make this reusable
   
    return (
      <div>
         <ListSkeletonStyle>
           <thead>
              <tr>
                <th><div></div></th>
                <th>Productline</th>
                <th>Name</th>
              </tr>
           </thead>
           <tbody>
            {Array.from({length:props.size}, (_, i)=> (
              <tr key={i}>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
                <td><Shimmer/></td>
              </tr>
              ))}
           </tbody>
         </ListSkeletonStyle>
        </div>
    ) 
}

export default ListLoader;