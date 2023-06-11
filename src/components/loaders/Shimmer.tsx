
import styled from 'styled-components';

const ShimmerWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  animation: loading 0.8s infinite;
  & .shimmer {
    height: 100%;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: skewX(-30deg);
  }

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(150%);
    }
  }
`;

function Shimmer() {
  return (
    <ShimmerWrapper>
      <div className="shimmer"></div>
    </ShimmerWrapper>
  );
}
export default Shimmer;
