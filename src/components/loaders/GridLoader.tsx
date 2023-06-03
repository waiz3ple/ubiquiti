import styled from "styled-components";
import Shimmer from "./Shimmer";

const SkeletonCardStyle = styled.div`
     position: relative;
     border: 2px solid var(--color-grey-3);
     border-radius: .8rem;
     width: 100%;
     overflow: hidden;

     & .wrapper{
       display: grid;
       grid-template-columns: 45%;
       grid-template-rows: 60%;
       justify-content: center;
       align-content:  center;
       border-radius: .8rem .8rem 0 0;
       height: 14rem;
       padding: auto;
       background: var(--color-grey-1);

         & .inner{
            background-color: var(--color-grey-3)
         }
     }

     & .text-line-one, .text-line-two{
        color: var(--color-grey-5);
        width: 8rem;
        height: 1.2rem;
        background-color: var(--color-grey-3);
        margin: 2rem 1.5rem 1rem;
     }

     & .text-line-two{
        width: 6rem;
        margin-top: 0;
     }
`;

export function SkeletonCard() {
  return (
    <SkeletonCardStyle>
      <div className="wrapper">
          <div className="inner"></div>
      </div>
       <div className="text-line-one"></div>
       <div className="text-line-two"></div>
      <Shimmer/>
    </SkeletonCardStyle>
  )
}




const SkeletonGrid = styled.div`
      & .grid-wrapper{
            color: var(--color-grey-4);
            padding: 2rem .5rem 1rem;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 2rem;

          //----------------------
      @media (max-width: 1110px){
          grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: 900px){
       grid-template-columns: repeat(3, 1fr);
     }

     @media (max-width: 660px){
       grid-template-columns: repeat(2, 1fr);
     }

     @media (max-width: 400px){
       grid-template-columns: repeat(1, 100%);
       gap:  1rem auto;
       justify-items: center;
       padding:0;
        }
        
    } 
`;


function GridLoader(props: {size:number}) {
  return (
 <SkeletonGrid>
     <div className="grid-wrapper">
      {Array.from({length:props.size}, (_,i)=> {
         return <SkeletonCard key={i}/>
      })}
    </div>
 </SkeletonGrid>
  )
}

export default GridLoader

