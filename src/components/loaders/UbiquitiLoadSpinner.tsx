// Ubiquiti Custome Load Spinner
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import React, { useLayoutEffect, useRef } from "react";
import { Interface } from "readline";
import styled from "styled-components";
import { iconPropsType } from "../../redux/Types";

const SvgWrapper = styled.div`
width: 100%;
height: 100vh;
display:grid;
justify-items:center;
align-items:center;
 & svg{
   width: 8%;
 }
 color: var(--color-secondary);
  &.part {
	& .box{
        fill:none;
        stroke:currentColor;
        stroke-width:2;
        stroke-miterlimit:10;
    }
	& .Uup{
        fill:none;
        stroke:currentColor;
        stroke-width:27;
        stroke-miterlimit:10;
        stroke-dasharray: 162.4374237060547;   
        stroke-dashoffset: 162.4374237060547;
    }

	& .Udown{
        fill:none;
        stroke: var(--color-grey-3);
        stroke-width:27;
        stroke-miterlimit:10;
    }
  }
`;


interface styleType{
    [property: string]:  React.CSSProperties;
}

const delay = '.5';
const commonMoves = {
   duration:1, 
   ease:'slow(0.6, 1.2)', 
   stagger:0.2
}

const commonAndForwardRot = {
     ...commonMoves,
     rotate: 360
}


const UbiquitiLoadSpinner = ({ pretty }: styleType) => {
  const rootEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (rootEl.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({repeat:-1, yoyo: true});
        const tl2 = gsap.timeline({repeat:-1});
        tl.set(rootEl.current, {autoAlpha: 1})
        .to(".box_1", {x:20,  ...commonMoves},  delay)
        .to(".box_2", {x:-20, ...commonMoves},  delay)
        .to(".box_3", {x:15,  ...commonMoves},  delay)
        .to(".box_4", {y:-20, ...commonMoves},  delay)
        .to(".box_4", {...commonAndForwardRot}, delay)
        .to(".box_4", {rotate: -360, duration:1, ease:'inOut', stagger:0.2}, '0.3');
        tl2.to(".Uup",   {strokeDashoffset:0,  duration:5, ease:"steps(6)"}, '0.3')
      }, rootEl.current);

      return () => ctx.revert(); // cleanup function
    }
  }, []);

  return (
    <SvgWrapper className="part" ref={rootEl}>
      <svg version="1.1" id="Ubiguiti" x="0px" y="0px" viewBox="0 0 127 142.9" enableBackground="new 0 0 127 142.9" xmlSpace="preserve" style={pretty}>
	      <rect className="box box_1" x="67.7" y="73.5"  width="12.9" height="12.3"/>
	      <rect className="box box_2" x="80.7" y="62.5"  width="11.5" height="11.3"/>
	      <rect className="box box_3" x="72"   y="53"    width="8.6"  height="8.9"/>
	      <rect className="box box_4" x="86.3" y="41.1"  width="5.6"  height="6.2"/>
	      <path className="Udown" d="M80.6,87.8v7.9c0,18.5-15,33.6-33.3,33.6l0,0C29,129.3,14,114.2,14,95.7V46.2"/>
	      <path className="Uup" d="M80.7,87.9v7.9c0,18.5-15.1,33.6-33.6,33.6l0,0c-18.5,0-33.6-15.1-33.6-33.6V46.4"/>
      </svg>
    </SvgWrapper>
  );
};

export default UbiquitiLoadSpinner; // Ubiquiti Custome Load Spinner


