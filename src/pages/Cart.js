import CartFun from "./CartFun";
import Price from "./Price";
import styled from "styled-components";
import Footer from "../components/others/Footer";
import { NavLink } from 'react-router-dom';
import { mobile } from "../responsive";
import { useState } from 'react';

const p41=require('../components/assets/images/Catg/iwatch/apple_watch_gold.png');
const p51=require('../components/assets/images/Catg/macbook/Macbook_Pro.png');

const Container = styled.div`
      `;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  background-color:rgb(247, 231, 201,0.3);
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// const CartFun = styled.div`
//   ${mobile({ margin: "5px 15px" })}
// `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  // const[itemArray,setArray] = useState([])
  // const[itemObj,setObj] = useState({
  //   product1:'',
  //   price:'',
  //   img:''
  // });

  // const updateitem=(e)=>{
  // setArray([e.target.id] = e.target.value)
  // }
  const [price,setprice]=useState(0);
  const getVal=num=>{
    const val=499*(num);
    setprice(val);
  }
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <NavLink to='/'>
          <TopButton>CONTINUE SHOPPING</TopButton>
        </NavLink>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={p41} />
                <Details>
                  <ProductName>
                    <b>Product:</b> APPLE WATCH SERIES 7
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="#F6CFCA" />
                  <ProductSize>
                    <b>Color:</b> Rose Gold
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <CartFun handleChange={getVal}/>
                </ProductAmountContainer>
                <ProductPrice>$ 499</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={p51} />
                <Details>
                  <ProductName>
                    <b>Product:</b> APPLE MACBOOK PRO
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Color:</b> Space Grey
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <CartFun />
                </ProductAmountContainer>
                <ProductPrice>$ 499</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 998</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 998</SummaryItemPrice>
            </SummaryItem>
            <NavLink to='/'>
            <Button>CHECKOUT NOW</Button>
            </NavLink>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

// import React from "react";
// import "./style.css";

// const Cart = ({ CartItem, addToCart, decreaseQty }) => {
//   // Stpe: 7   calucate total of items
//   const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

//   // prodcut qty total
//   return (
//     <>
//       <section className='cart-items'>
//         <div className='container d_flex'>
//           {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

//           <div className='cart-details'>
//             {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

//             {/* yasma hami le cart item lai display garaaxa */}
//             {CartItem.map((item) => {
//               const productQty = item.price * item.qty

//               return (
//                 <div className='cart-list product d_flex' key={item.id}>
//                   <div className='img'>
//                     <img src={item.cover} alt='' />
//                   </div>
//                   <div className='cart-details'>
//                     <h3>{item.name}</h3>
//                     <h4>
//                       ${item.price}.00 * {item.qty}
//                       <span>${productQty}.00</span>
//                     </h4>
//                   </div>
//                   <div className='cart-items-function'>
//                     <div className='removeCart'>
//                       <button className='removeCart'>
//                         <i className='fa-solid fa-xmark'></i>
//                       </button>
//                     </div>
//                     {/* stpe: 5 
//                     product ko qty lai inc ra des garne
//                     */}
//                     <div className='cartControl d_flex'>
//                       <button className='incCart' onClick={() => addToCart(item)}>
//                         <i className='fa-solid fa-plus'></i>
//                       </button>
//                       <button className='desCart' onClick={() => decreaseQty(item)}>
//                         <i className='fa-solid fa-minus'></i>
//                       </button>
//                     </div>
//                   </div>

//                   <div className='cart-item-price'></div>
//                 </div>
//               )
//             })}
//           </div>

//           <div className='cart-total product'>
//             <h2>Cart Summary</h2>
//             <div className=' d_flex'>
//               <h4>Total Price :</h4>
//               <h3>${totalPrice}.00</h3>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Cart;