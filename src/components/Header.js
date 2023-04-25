import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    background-color: var(--color-grey-2);
`;


function Header(props){
   return(
    <HeaderStyle>
       <div className="brand-logo">
           <img src="" alt="Brand Logo"/>
           <h4>Devices</h4>
           <p>Author/{props.user ||'Developer Name'}</p>
        </div>
    </HeaderStyle>
   )
}

export default Header;




