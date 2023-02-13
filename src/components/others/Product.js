import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mobile } from "../../responsive";

const Container = styled.div`
    flex:1;
    margin:10px;
    width: 280px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f8f3f3;
    flex-direction:column;
    position:relative;
    border-radius:3%;
    ${'' /* margin:10px; */}
    ${'' /* background-color: #f5fbfd;
    position: relative; */}
    ${mobile({ padding: "10px", flexDirection:"column", width:"40vw"})}

`;

const Image=styled.img`
    height:55%;
    width:65%;
  ${'' /* height:70%; */}
    ${'' /* width:80% */}
    object-fit:cover;
    ${mobile({ height: "40vh", width:"40vw" })}
`;

const Details=styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding-top:30px;
    ${mobile({ width:"40vw"})}
`;

const Title=styled.div`
    font-size:20px;
    font-weight:500;

`;
const Price=styled.div`
    padding:10px;
    color:#FF4858;
    font-weight:500;
    
`;
const Info=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius:3%;
    z-index:3;
    opacity:0;
    &:hover{
        background-color:rgba(0,0,0,0.3);
        opacity:1;
        
    }
`;

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    cursor:pointer;
    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        
        <Info>
            <Icon>
            <NavLink to='/Cart'>
                <ShoppingCartOutlined/>
            </NavLink>
            </Icon>
            <Icon>
            <NavLink to='/Product1'>
                <SearchOutlined />
            </NavLink>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        <Details>
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
        </Details>
    </Container>
  )
}

export default Product;
