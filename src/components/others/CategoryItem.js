
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    flex:1;
    margin:40px;
    margin-top:30px;
    height:60vh;
    ${'' /* width:0%; */}
    position:relative;
    background-color:#f8f3f3;
    border-radius:5%;
    border: 1.5px solid #9b9898;
    box-shadow: 2px solid black;
    transition: all 0.2s ease;
    &:hover{
        ${'' /* transform: scale(1.02); */}
        border-shadow:2px gray;
        background-color:rgba(0,0,0,0.1);
    }
    
`;

const Image=styled.img`
  margin-top:5%;
  width:60%;
  height:55%;
  margin-left:20%;
  object-fit:cover;
`;

const Info=styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:30%;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Title=styled.h1`
  color:black;
  margin-bottom:10px;
  font-size:30px;
    
`;

const Button=styled.button`
    border:2px solid #606060;
    padding:7px;
    background-color:#817e7e;
    ${'' /* border-radius:20%; */}
    color:white;
    cursor:pointer;
    &:hover{
        background-color:gray;
        transform: scale(1.1);
    }
`;

const CategoryItem = ({item}) => {
  return (
    <>
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <NavLink to='/ProductList'>
                <Button>SHOP NOW</Button>
                </NavLink>
            </Info>    
        </Container>
    </>
  )
}

export default CategoryItem;


