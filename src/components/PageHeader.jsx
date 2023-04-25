import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    background-color: var(--color-grey-5);

    
`;


function PageHeader(props){
   return(
    <HeaderStyle>
       <div className="header-info">
          <img className="brand-logo" alt="Brand Logo" src="https://cdn.shopify.com/s/files/1/1439/1668/t/28/assets/logo.svg?v=136823354682183510631672761392"/>
          <h4>Devices</h4>
        </div>
        <div className="user-info">
           <p>Author/{props.user ||'Developer Name'}</p>
        </div>
    </HeaderStyle>
   )
}

export default PageHeader;




