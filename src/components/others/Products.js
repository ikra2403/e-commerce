import React from 'react'
import Product from './Product'
import styled from 'styled-components';
import { popularProducts } from '../../data';

const Container = styled.div`
    padding:5px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    

`;
const Inner = styled.div`


`;

const Products = () => {
  return (
    <>
        <Container>
           {popularProducts.map(item=>(
            <Inner>
              <Product item={item} key={item.id}/>
            </Inner>
           ))} 
        </Container>
    </>
  )
}

export default Products;
