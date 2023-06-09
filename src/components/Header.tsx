import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    position: relative;
    display: grid;
    margin-right:0;
    grid-template-columns: min-content repeat(2, 1fr);
    background-image: linear-gradient(90deg, var(--color-grey-3), 40%, var(--color-grey-1));
   & .user-info{
      display:grid;
      justify-content: end ;
      padding-right: 3rem;
   }

   & .devices, & .user-info p{
     display: grid;
     align-content: center;
     font-weight: normal;
    }

   & .devices{
      padding-left: 2rem;
      font-size: 1.3rem;
   }
   & a{
      padding: 0;
       
      & img{
         height: 100%;
       }
      }
   }
`;

interface propsType{
   user?: string,
   error?:string,
   loading?: boolean
}

function Header(props: propsType){
   return(
      <HeaderStyle>
        {/* Brand logo */}
        <Link to="/">
          <img className="brand-logo" alt="Brand Logo" src="https://cdn.shopify.com/s/files/1/1439/1668/t/28/assets/logo.svg?v=136823354682183510631672761392" />
        </Link>
        {/* Page title */}
        <h4 className="devices">Devices</h4>
        {/* User info */}
        <div className="user-info">
          {/* User name */}
          <p>Author/{props.user || 'Developer Name'}</p>
        </div>
      </HeaderStyle>

   )
}

export default Header;


