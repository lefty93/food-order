import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo, basket } from '../assets';
import { navLinks } from '../constants';
import { IconContext } from 'react-icons';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-lg`}>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => setActive("")}
        >
          <img src={logo} alt="logo" className='object-contain w-20 h-20 p-3' />
        </Link>

        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((navlink) => (
            <li
              key={navlink.id}
              className={`${active === navlink.title ? "text-secondary" : "text-black"} hover:text-secondary font-bold text-[18px] cursor-pointer hover:border-b-4 border-secondary h-[40px]}`}
              onClick={() => setActive(navlink.title)}
              
            >
              <Link to={`/${navlink.id}`}>{navlink.title}</Link>
            </li>
          ))}
          <Link to="/order"><img src={basket} alt="" className='h-[24px] w-[24px]' /></Link>
        </ul>

        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <Link to="/order"><img src={basket} alt="" className='h-[24px] w-[24px]' /></Link>
          <IconContext.Provider value={{ size: '24px' }}>
            <div onClick={() => setToggle((prev) => !prev)}>
              {toggle ? <FiX /> : <FiMenu />}
            </div>
          </IconContext.Provider>

          <div className={`${toggle ? 'flex' : 'hidden'}`}>

            <ul className={`flex-row list-none`}>

              {navLinks.map((navlink) => (
                <li key={navlink.id}
                  className={`${active === navlink.title ? "text-secondary" : "text-black"} hover:text-secondary font-bold text-[18px] cursor-pointer`}
                >
                  <Link to={`/${navlink.id}`}>{navlink.title}</Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar