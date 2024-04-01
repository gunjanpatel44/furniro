import React from 'react';
import Logo from '../img/logo.ico'
import { FaGreaterThan } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';
import FeatureBanner from './FeatureBanner';

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className='preview-banner'>
        <div className='blur-background'>
          <div className='cart-banner-div'>
            <img src={Logo} alt='Logo'></img>
            <p className='cart-banner text-3xl'>Cart</p>
            <div className='flex flex-row content-center items-center'>
              Home <FaGreaterThan /> cart
            </div>
          </div>
        </div>
      </div>
      <FeatureBanner/>
      <Footer/>
    </div>
  )
}
