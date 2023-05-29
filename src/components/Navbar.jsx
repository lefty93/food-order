import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { IconContext } from 'react-icons';
import { BsFillBagFill } from "react-icons/bs";
import { useStateValue } from '../context/StateProvider';
import Cart from './Cart';
// import { getCoffeeTotal } from '../context/reducer';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [{ cart }] = useStateValue();
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  // const { total, coffeeCounts } = getCoffeeTotal(cart);


  const handleMouseEnter = () => {
    if (cart.length > 0) {
      setPopoverOpen(true)
    }
  };

  const handleMouseLeave = () => {
    setPopoverOpen(false);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-lg`}>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to="/"
          className='flex items-center gap-2'
        >
          <img src={logo} alt="logo" className='object-contain w-20 h-20 p-3' />
        </Link>

        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((navlink) => (
            <li
              key={navlink.id}
              className={` hover:text-secondary font-bold text-[18px] cursor-pointer nav`}
            >
              <Link to={`/${navlink.id}`}>{navlink.title}</Link>
            </li>
          ))}

          {/* TODO MAKE A POPOVER CART ON HOVER FOR BASKET */}
          <div className='relative'>
            <Link to="/order"><BsFillBagFill className='h-[24px] w-[24px]' onMouseEnter={handleMouseEnter} /></Link>
            <div className={`absolute left-4 top-4 ${cart?.length > 0 ? 'flex' : 'hidden'}`}>
              <span className='w-[11px] h-[11px] bg-red-500 rounded-full border-2'></span>
            </div>
            {cart.length > 0 && isPopoverOpen && (
              <div
                className="absolute top-full right-[20%] transform translate-x-[0%] w-96 mt-2 p-4 bg-gray-200 rounded max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500"
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              >
                <div className='w-16 h-60'>
                  <span className='text-[24px] text-center'>Cart</span>
                  
                  {/* <ul>
                    {cart.map((cartitem) => (
                      <li key={cartitem.id}>
                        <img src={cartitem.image} alt="" />
                        <span className='text-[14px] text-center'>{cartitem.name}</span>
                      </li>
                    ))}

                  </ul> */}
                  


                </div>


              </div>
            )}

          </div>
        </ul>
        {/* basket */}

        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <Link to="/order"><BsFillBagFill className='h-[24px] w-[24px]' /></Link>
          <IconContext.Provider value={{ size: '24px' }}>
            <div onClick={() => setToggle((prev) => !prev)}>
              {toggle ? <FiX /> : <FiMenu />}
            </div>
          </IconContext.Provider>

          <div className={`${toggle ? 'flex' : 'hidden'}`}>

            <ul className={`flex-row list-none`}>
              {navLinks.map((navlink) => (
                <li key={navlink.id}
                  className={` hover:text-secondary font-bold text-[18px] cursor-pointer`}
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