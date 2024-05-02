import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from '../img/Meubel-House-Logo.svg';
import { FaUserEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { VscThreeBars, VscClose } from "react-icons/vsc";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [logoOn, setLogoOn] = useState(true);

  const toggleBtn = () => {
    setClick(!click);
    setLogoOn(!logoOn);
  }

  return (
    <nav className="navbar content-between">
      {logoOn && <div className="furniro-title flex text-center items-center g-m-left" id="furniro-nav-logo">
        <img src={Logo} alt="Furniro" />
        <p >Furniro</p>
      </div>}
      <div className=" lg:flex hidden md:hidden gap-16 nav-items">
        <ul className="nav-ul flex w-full">
          <Link to={'/home'} className='nav-li'>Home</Link>
          <Link to={'/shop'} className='nav-li'>Shop</Link>
          <Link to={'/about'} className='nav-li'>About</Link>
          <Link to={'/contact'} className='nav-li'>Contact</Link>
        </ul>
        <div className="nav-icons g-m-right cursor-pointer">
          <Link to={'/cart'}>
            <FaUserEdit />
          </Link>
          <Link to={'/cart'}>
            <CiSearch />
          </Link>
          <Link to={'/cart'}>
            <GoHeart />
          </Link>
          <Link to={'/cart'}>
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>

      {click &&
        <div className=" menu-bar lg:hidden flex flex-col w-[100vh] h-[100vh] gap-16 nav-items-menu" id="nav-hide">
          <ul className="nav-ul flex w-full nav-hide">
            <Link to={'/home'} >Home</Link>
            <Link to={'/shop'} >Shop</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/contact'} >Contact</Link>
          </ul>
          <div className="nav-icons nav-hide-2 cursor-pointer">
            <Link to={'/cart'}>
              <FaUserEdit />
            </Link>
            <CiSearch />
            <GoHeart />
            <HiOutlineShoppingCart />
          </div>
        </div>
      }
      <button className=" toggle-btn g-m-right lg:hidden text-6xl items-center top-0 right-0 h-10 flex justify-center" onClick={toggleBtn}>
        {click ? <VscClose /> : <VscThreeBars />}
      </button>
    </nav>
  );
}