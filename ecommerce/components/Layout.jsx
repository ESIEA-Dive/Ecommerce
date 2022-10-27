import React from 'react';
import Head from 'next/Head';

import { Navbar, Footer } from '../components';

const Layout = ( { children } ) => {
  return (
    <div className='layout'>
      <Head>
        <title>OnePoint Fake Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
};

export default Layout;