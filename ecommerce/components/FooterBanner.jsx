import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../LIB/client';

const FooterBanner = ({ footerBanner: {image, discount, largeText1, largeText2, saleTime
  , buttonText, smallText, midText, product, desc } }) => {
  return (
    <div className="footer-banner-container" >
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}> 
            <button type='button'>{buttonText}</button>
          </Link>
          <img src={urlFor(image)} alt='footerBanner' className='footer-banner-image' />
        </div>
      </div>
    </div>
  )
};

export default FooterBanner;