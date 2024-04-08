import React from 'react';
import Logo from '../img/logo.ico'
import { FaGreaterThan } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';
import FeatureBanner from './FeatureBanner';
import Banner from '../img/preview-banner.svg'

export default function Cart() {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <Navbar />
      <div>
        <div className='preview-banner'>
        
          <img src={Banner}/>
        </div>
        <div className='cart-banner-div'>
          <img src={Logo} alt='Logo'></img>
          <p className='cart-banner text-3xl'>Cart</p>
          <div className='flex flex-row content-center items-center'>
            Home <FaGreaterThan /> cart
          </div>
        </div>
      </div>
      <FeatureBanner className=" relative"/>
      <Footer />
    </div>
  )
}
c