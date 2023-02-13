import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

var a1=require('../assets/images/adv1.png');

const Adv = () => {
  return (
    <>
        
            <div className='Wrapper1'>
                <div className='adver'>
                <div class='adv-info'>
                    <h1 className='adv-title'>iPhone 6 Plus</h1>
                    <p className='adv-desc'>Performance and Design. Taken to right edge.</p>
                    <NavLink to='/ProductList'>
                    <button className='adv-btn'>SHOP NOW</button>
                    </NavLink>
                </div>
                <div className='adv-img'>
                    <img src={a1} alt='img'/>
                </div>
                </div>
            </div>
    </>
  )
}

export default Adv;
