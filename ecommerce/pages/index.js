import React from 'react';

import { Product, Cart, HeroBanner, FooterBanner, Layout, Footer, Navbar} from '../components';

const Home = () => {
  return (
    <>
    <HeroBanner/>
      
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p> Speakers of many Variations</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

    <FooterBanner />
    </>
  )
};

export default Home;