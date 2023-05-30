import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image404 from '../assets/images/image.svg';
import Button from '../components/Button';

const NotFoundWrapper = styled.div`
    text-align: center;
    & img{
       width: 30%;
       margin: auto;
       display: block;
    }
    h1{
      font-size: 3rem;
    }

    & p{
      margin: 1rem 0;
      font-size: 1.2rem;
    }
`;

function NotFound({errorMessage, errorDetail, linkTitle }:NotFoundType) {
  return (
    <NotFoundWrapper>
       <img src={image404} alt="404 Image" />
       <h1 className="title">{errorMessage}</h1>
       <p>{errorDetail}</p>
       <Button>
          <Link to={'/ubiquiti'}>{linkTitle}</Link>  {/* remove! only for github */}
          {/* <Link to={'/'}>Go back Home</Link> */}  
       </Button>
    </NotFoundWrapper>
  )
}

interface NotFoundType{
   errorMessage: string,
   errorDetail: string,
   linkTitle: string,
}

NotFound.defaultProps = {
   errorMessage: 'It seems you hit a snag!',
   errorDetail: 'Sorry, the page you are requesting is not avaliable',
   linkTitle: 'Go back home'
}

export default NotFound



/* function NotFound() {
  return (
    <NotFoundWrapper>
       <img src={image404} alt="404 Image" />
       <h1 className="title">It seems you hit a snag!</h1>
       <p>Sorry, the page you are requesting is not avaliable</p>
       <Button>
          <Link to={'/ubiquiti'}>Go back Home</Link>  {/* remove! only for github */
          /* <Link to={'/'}>Go back Home</Link>   
       </Button>
    </NotFoundWrapper>
  )
}

export default NotFound;
 */