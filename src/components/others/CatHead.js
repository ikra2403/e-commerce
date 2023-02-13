import React from 'react'
import styled from 'styled-components';

const Heading=styled.div`
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
    ${'' /* background-color:black; */}
`

const HeadName=styled.h1`
    display:flex;
    margin-top:5%;
    font-size:50px;
    color:#5c5b5b;
`

const CatHead = () => {
  return (
    <>
        <Heading>
            <HeadName>CATEGORIES</HeadName>
        </Heading>
    </>
  )
}

export default CatHead;