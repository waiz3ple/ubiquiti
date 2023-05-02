import styled from 'styled-components';
import SpecTable from './SpecTable';
const TableStyle = styled.table`
  width: 100%;  
  border-collapse: collapse;

  &  thead tr, tbody  tr{
     display: grid;
     grid-template-columns: 1fr 3fr 10fr;
     
  }
     
    &  td, th  {
       display: grid;
       border-bottom: 1px solid var(--color-grey-3);
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
       & img{
         width: 2rem;
       } 
       & > td:first-child{
         justify-items: end;
       } 
     }

`;


function TableList(){  // make this reusable
    return (
         <TableStyle>
           <thead>
              <tr>
                <th>123 devices</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
                <SpecTable/>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td><img src="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png"/></td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
           </tbody>
         </TableStyle> 
    )
}

export default TableList;