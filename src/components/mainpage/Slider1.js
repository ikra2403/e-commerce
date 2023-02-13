import React, { useState } from 'react'
import './Home.css'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components';
import { sliderItems } from '../../data';
import { mobile } from "../../responsive";

// var c1=require('../assets/images/corousel_12.png');
// var c2=require('../assets/images/corousel_3.png');
// var c3=require('../assets/images/corousel_2.png');

const SliderMain=styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display:"none" })}
`;

const Arrow=styled.div`
  width: 50px;
  height: 50px;
  background-color:aliceblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  left: ${props=>props.direction=== "left" && "20px"};
  right: ${props=>props.direction=== "right" && "15px"};
`;

const MainWrapper=styled.div`
  height:100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex*(-100)}vw);
  transition: all 1s ease-in;
  
`;

// const Wrapper=styled.div`
//   height: 100%;
//   display: flex;
// `;

const Slide=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position:relative;
  
`;

const ImgContainer=styled.div`
  height: 115vh;
  width: 100vw;
  margin-left: 7px;  
`;

const Image=styled.img`
  height: 90%;
  width: 100%;
  object-fit:cover;
`;

// const InfoCont=styled.div`
//   display:flex;
//   ${'' /* flex:1; */}
//   flex-direction:column;
//   position:absolute;
//   left:10%;

// `;
// const Title=styled.h1`

// `;

// const Desc=styled.div`
  
// `;
const Slider1 = () => {

  const[slideIndex, setSlideIndex]=useState(0); 
  const handleClick=(direction)=>{
    if(direction==="left")
    {
      setSlideIndex(slideIndex>0? slideIndex-1 : 2)
    }
    else
    {
      setSlideIndex(slideIndex<2? slideIndex+1: 0)
    }
  };

  return (
    <>
        <SliderMain>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <MainWrapper slideIndex={slideIndex}>
            {sliderItems.map((items)=>(
              <Slide key={items.id}>
                {/* <InfoCont>
                  <Title>{items.title}</Title>
                  <Desc>{items.desc}</Desc>
                </InfoCont> */}
                <ImgContainer>
                  <Image src={items.Img}/>
                </ImgContainer>
              </Slide>
            ))}
          </MainWrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </SliderMain>
    </>
  )
}

export default Slider1;
