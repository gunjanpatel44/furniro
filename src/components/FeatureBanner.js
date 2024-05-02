import React from 'react'
import Quality from '../img/quality.png';
import Shipping from '../img/shipping.png';
import Warrenty from '../img/warrenty.png';
import Support from '../img/support.png';

export default function FeaureBanner(){
  return(
    <div className='feature-banner g-m-right g-m-left lg:grid-cols-2 md:grid-cols-3' >
      <div className='feature-service'>
        <img src={Quality} alt="High Quality" className='feature-banner-img'/>
        <div className='feature-content'>
          <div className='feature-banner-header'>High Quality</div>
          <div className='feature-banner-p'>Crafted from top materials</div>
        </div>
      </div>
      <div className='feature-service'>
        <img src={Warrenty} alt="Warrenty Protection" className='feature-banner-img'/>
        <div className='feature-content'>
          <div className='feature-banner-header'>Warrenty Protection</div>
          <div className='feature-banner-p'>Over 2 years</div>
        </div>
      </div>
      <div className='feature-service'>
        <img src={Shipping} alt="Free Shipping" className='feature-banner-img'/>
        <div className='feature-content'>
          <div className='feature-banner-header'>Free Shipping</div>
          <div className='feature-banner-p'>Order over 150 $</div>
        </div>
      </div>
      <div className='feature-service'>
        <img src={Support} alt="24/7 Support" className='feature-banner-img'/>
        <div className='feature-content'>
          <div className='feature-banner-header'>24/7 Support</div>
          <div className='feature-banner-p'>Dedicated support</div>
        </div>
      </div>
    </div>
  )
}