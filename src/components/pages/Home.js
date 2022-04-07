import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne } from './Data';
import Cards from '../Cards'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;