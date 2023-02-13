import React from 'react';
import styled from 'styled-components';
import { categories, categories1 } from '../../data';
import CategoryItem from './CategoryItem';

const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`;

const MainCont=styled.div`
flex:1;
display:flex;
`;

const Heading=styled.div`

`;

const HeadName=styled.h1`
`;

const Categories = () => {
  return (
    <>
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
        <Container>
            {categories1.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    </>
  )
}

export default Categories;