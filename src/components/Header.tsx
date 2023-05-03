import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    background-image: linear-gradient(90deg, var(--color-grey-3), 40%, var(--color-grey-1));
    display: grid;
    grid-template-columns: min-content repeat( 2, 1fr);
    position: relative;
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
   user: string
}

function Header(props: propsType){
   return(
    <HeaderStyle>
          {/* will need to make this image a component*/}
           <Link to="/">
             <img className="brand-logo" alt="Brand Logo" src="https://cdn.shopify.com/s/files/1/1439/1668/t/28/assets/logo.svg?v=136823354682183510631672761392"/>
           </Link>
          <h4 className="devices">Devices</h4>
       
        <div className="user-info">
           <p>Author/{props.user ||'Developer Name'}</p>
        </div>
    </HeaderStyle>
   )
}

export default Header;


