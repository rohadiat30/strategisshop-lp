import React from 'react'
import styles from '../Styles'
import { Link } from 'react-router-dom'
import { category } from '../Data/Data'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const OurProduct = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      id="product"
      className={`text-center md:flex-row flex-col ${styles.paddingY}`}
    >
      <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
        Our <span className="text-gradient">Product</span>{' '}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ss:grid-cols-2 xs:grid-cols-1 xs:place-items-center my-5">
        {category.map((category, index) => (
          <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="flex w-[270px] h-[307px] my-3 flex-col justify-center bg-secondary/10 rounded-xl shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-secondary/30 duration-300"
            key={category.id}
          >
            <img className="h-[150px] mx-auto" src={category.img} alt="CCTV" />
            <div className="p-2">
              <h5 className="text-2xl font-bold text-secondary">
                {category.title}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default OurProduct
