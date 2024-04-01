import React, { useState, useEffect } from 'react';

import shareYourSetup from '../img/Share.svg'
import Dining from '../img/image-dining.svg'
import Living from '../img/Image-living room.svg'
import BedroomExplore from '../img/Explore-More/bedroom-explore-more.svg'
import Bedroom from '../img/image-bedroom.svg'
import ProductsRender from '../components/ProductsRender.js'
import { Link } from 'react-router-dom';
import products from "./products.js"
import Navbar from './Navbar.js';
import FeaureBanner from './FeatureBanner.js';
import Footer from './Footer.js';
export default function Home() {
  const [showProductsNum, setShowProductsNum] = useState(6);
  let addProducts = 6;
  useEffect(() => {
    // Function to get the value of the --gridCol CSS variable
    const getGridColValue = () => {
      const element = document.querySelector('.our-products-grid');
      if (element) {
        const computedStyles = window.getComputedStyle(element);
        const gridColValue = parseInt(computedStyles.getPropertyValue('--gridCol'));
        return gridColValue || 6; // Return 6 if --gridCol is not set
      }
      return 6; // Default value
    };

    // Set the initial value of showProductsNum
    const initialGridColValue = getGridColValue();
    addProducts = initialGridColValue;
    setShowProductsNum(initialGridColValue);

    // Optional: Update showProductsNum whenever --gridCol changes
    const handleResize = () => {
      const updatedGridColValue = getGridColValue();
      addProducts = updatedGridColValue;
      setShowProductsNum(updatedGridColValue);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Home'>
      <Navbar />
      <div className="hero">
        <div className="hero-section">
          <p className=' hero-text'>New Arrival</p>
          <p className="hero-title my-2">Discover Our New Collection</p>
          <p className=' my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur cum accusamus, beatae similique adipisci sequi laudantium dolorem</p>
          <button className="hero-buy-now">BUY NOW</button>
        </div>
      </div>
      <div className="browse g-m-left g-m-right">
        <div className="browse-range">
          <p className=" browse-title">Browse The Range</p>
          <p className=" text-base browse-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="browse-section flex flex-row">
          <div className="browse-1">
            <img src={Dining} alt="Dining" />
            <p className="browse-names">Dining</p>
          </div>
          <div className="browse-1">
            <img src={Living} alt="Living" />
            <p className="browse-names">Living</p>
          </div>
          <div className="browse-1">
            <img src={Bedroom} alt="Bedroom" />
            <p className="browse-names">Bedroom</p>
          </div>
        </div>
      </div>
      <div className="our-products">
        <p className="our-products-caption">Our Products</p>
        <div className="our-products-grid g-m-left g-m-right align-middle">
          <ProductsRender showProductsNum={showProductsNum} />
        </div>
        {products.length !== showProductsNum &&
          <div className="show-more-products">
          <button className='show-more-btn' onClick={() => setShowProductsNum(prev => prev + showProductsNum)}>Show More</button>
          </div>
        }
      </div>
      <div className="explore-more-section my-8">
        <div className="explore">
          <p className=' text-4xl font-bold'>
            50+ Beautiful rooms inspiration
          </p>
          <p className='text-explore'>Our designers already made a lot of beautiful prototypes of rooms that inspires you</p>
          <Link className='explore-more-btn'>Explore More</Link>
        </div>
        {/* <img src={BedroomExplore} alt="Bedroom Explore" /> */}
      </div>
      <div className="share-your-setup g-m-left g-m-right my-8">
        <div className="share-setup-title">
          <p className=' share-your-setup-with'>Share your setup with</p>
          <p className=' text-3xl font-bold'>#FurniroFurniture</p>
        </div>
        <img src={shareYourSetup} alt="shareYourSetup" />
      </div>
      <FeaureBanner/>
      <Footer/>
    </div>
  );
}
