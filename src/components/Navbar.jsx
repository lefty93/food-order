import React, { useState, } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { IconContext } from 'react-icons';
import { BsFillBagFill } from "react-icons/bs";
import { useStateValue } from '../context/StateProvider';
import { motion } from 'framer-motion';
import { popoverVariants } from '../utils/motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [{ cart }] = useStateValue();
  const [isPopoverOpen, setPopoverOpen] = useState(false)

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

          {/* TODO Customize the POPOVER CART */}
          <div className="relative">
            <Link to="/order">
              <BsFillBagFill className="h-[24px] w-[24px]" onMouseEnter={handleMouseEnter} />
            </Link>

            {/* red-dot notification */}
            <div
              className={`absolute left-4 top-4 ${cart?.length > 0 ? 'flex' : 'hidden'}`}
            >
              <span className="w-3 h-3 bg-red-500 rounded-full border-2"></span>
            </div>

            {/* popover cart */}
            {cart.length > 0 && isPopoverOpen && (
              <motion.div
                className="absolute top-full right-[-20%] transform translate-x-[-50%] w-72 h-60 mt-2 p-4 bg-white shadow-lg rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500"
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                variants={popoverVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-lg font-semibold mb-4">Recently Added Drinks</div>
                <ul className="space-y-2">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" h-14 w-14 object-cover rounded-full"
                      />
                      <div>
                        <div className="text-sm">{item.name}</div>
                        <div className="text-xs text-gray-500">QTY: {item.count}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Link to="/order" className="text-blue-500 underline">
                    View My Shopping Cart
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

        </ul>

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