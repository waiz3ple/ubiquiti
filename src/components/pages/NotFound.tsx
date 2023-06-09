import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image404 from '../../assets/images/image.svg';
import Button from '../Button';

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

interface NotFoundProps {
  errorMessage?: string;
  errorDetail?: string;
  linkTitle?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  errorMessage = 'It seems you hit a snag!',
  errorDetail = 'Sorry, the page you are requesting is not available',
  linkTitle = 'Go back home',
}) => {
  return (
    <NotFoundWrapper>
      <img src={image404} alt="404 Image" />
      <h1 className="title">{errorMessage}</h1>
      <p>{errorDetail}</p>
      <Button>
        <Link to="/ubiquiti">{linkTitle}</Link>
        {/* Uncomment the line below to go back to the home page */}
        {/* <Link to="/">Go back Home</Link> */}
      </Button>
    </NotFoundWrapper>
  );
};

export default NotFound;






