import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    background-color: var(--color-grey-5);
`;


function PageHeader(props){
   return(
    <HeaderStyle>
       <div className="brand-logo">
           <img src='https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png' alt="Brand Logo"/>
        </div>
        <div className="info-wrapper">
           <h4>Devices</h4>
           <p>Author/{props.user ||'Developer Name'}</p>
        </div>
    </HeaderStyle>
   )
}

export default PageHeader;




