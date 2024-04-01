import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className='footer'>
      <div className='footer-sections g-m-left g-m-right'>
        <div className='footers-content'>
          <div className="footer-company">
            <p className='footer-title footer-headers'>Furniro</p>
            <p>400 University Drive Suite 200 <br /> Coral Gables,
              <br />FL 33134 USA
            </p>
          </div>
          <div className="footer-links">
            <p className='footer-headers'>Links</p>
            <Link className='footer-link'>Home</Link>
            <Link className='footer-link'>About</Link>
            <Link className='footer-link'>Shop</Link>
            <Link className='footer-link'>Contact</Link>
          </div>
          <div className="footer-links">
            <p className='footer-headers'>Help</p>
            <Link className='footer-link'>Payment Options</Link>
            <Link className='footer-link'>Returns</Link>
            <Link className='footer-link'>Privacy policies</Link>
          </div>
          <div className='footer-links'>
            <p className="footer-headers">News Letter</p>
            <form action="#" className='newsletter-form'>
              <input className='email-input' type="email" placeholder='Enter Your Email Address' />
              <button className='btn-subscribe'>SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
      <div className=' py-4 text-center font-semibold text-xs'>
        © 1996-2024, Furnio, Inc. or its affiliates
      </div>
    </footer>
  )
}
