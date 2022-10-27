import React from 'react';
import Link from 'next/Link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Onepoint Fake Shop</Link>
      </p>

      <button type='button' className='cart-icon'>
        <AiOutlineShopping />
        <span className='cart-item-qty'></span>
      </button>
    </div>
  )
};

export default Navbar;