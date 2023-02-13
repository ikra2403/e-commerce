import React from 'react'
import AdvMain from '../mainpage/AdvMain';
import Categories from './Categories';
import CatHead from './CatHead';
import Footer from './Footer';
import Newsletter from './Newsletter';
import ProdHead from './ProdHead';
import Products  from './Products';

const Home2 = () => {
  return (
    <>
        <CatHead/>
        <Categories/>
        <AdvMain/>
        <ProdHead/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default Home2;