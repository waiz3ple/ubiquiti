import gsap from 'gsap';
import { useRef } from 'react';
import styled, { keyframes } from "styled-components";

const ShimmerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading .8s infinite;
    & .shimmer{
        height: 100%;
        width: 50%;
        background-color:  rgba(255,255,255, .2);
        transform: skewX(-30deg)
    }


    @keyframes loading{
      0% {transform: translateX(-150%)}
      50% {transform: translateX(-60%)}
      100% {transform: translateX(150%)}
    }
`;




function Shimmer() {
  return (
    <ShimmerWrapper>
       <div className="shimmer"></div>
    </ShimmerWrapper>
  )
}
export default Shimmer;
