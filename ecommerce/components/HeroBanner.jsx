import React from 'react';
import Link from 'next/link';

import { urlFor } from '../LIB/client';

const HeroBanner = ({ heroBanner: {image, smallText, midText, product, desc, largeText1, buttonText} }) => {

    // Don't need only if you want to change the name, to be easier
    // const { smallText: title, image: img, discount: disc, 
    //     largeText1: LT1, largeText2: LT2, buttonText: btn, 
    //     desc: desc, saleTime: sale, midText: mid, Product: product } = heroBanner;
  return (

    <div className='hero-banner-container'>
        <div>
            <p className='title-solo'>{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <img src={urlFor(image)} alt='banner' className='hero-banner-image'/>

            <div>
                <Link href={`/product/${product}`}>
                    <button type='button'>{buttonText}</button>
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