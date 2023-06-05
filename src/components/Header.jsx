import React, { useState, useEffect, useRef } from 'react'
import styles from '../Styles'
import { verlogo, menu, close } from '../assets'
import { Link } from 'react-router-dom'
import { navLinks } from '../Data/Data'
import { navVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Header = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [isActicve, setIsActive] = useState(false)

  const menuRef = useRef()
  const btnRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
    window.addEventListener('click', (e) => {
      if (e.target !== menuRef.current && e.target !== btnRef.current) {
        setToggle(false)
      }
    })
  })
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` ${
        isActicve
          ? 'bg-black-gradient-2 fixed shadow-md z-50 transition-all'
          : 'bg-none py-6 relative z-50'
      } w-full flex py-4 justify-between navbar xl:px-48 px-10`}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}
      >
        <img src={verlogo} alt="hoobank" className="h-[40px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? 'text-secondary' : 'text-white'
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          ref={btnRef}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-99`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-secondary' : 'text-white'
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle)
                setActive(nav.title)
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
