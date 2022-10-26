import React from 'react';
import Link from 'next/link';

import { urlFor } from '../LIB/client';

const HeroBanner = ({ heroBanner }) => {

    const { smallText: title, image: img, discount: disc, 
        largeText1: LT1, largeText2: LT2, buttonText: btn, 
        desc: desc, saleTime: sale, midText: mid, Product: product } = heroBanner;
  return (

    <div className='hero-banner-container'>
        <div>
            <p className='title-solo'>{title}</p>
            <h3>{mid}</h3>
            <h1>{LT1}</h1>
            <img src={urlFor(img)} alt='banner' className='hero-banner-image'/>

            <div>
                <Link href={`/product/${product}`}>
                    <button type='button'>{btn}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default HeroBanner;