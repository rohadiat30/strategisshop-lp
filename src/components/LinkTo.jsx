import { motion } from 'framer-motion'

import styles from '../Styles'
import { marketPlaces } from '../Data/Data'
import { fadeIn, staggerContainer } from '../utils/motion'
import { arrow } from '../assets'

const Insights = () => (
  <section className={`${styles.paddingY} relative z-10 mb-10`}>
    <motion.div
      id="order"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
        How to <span className="text-gradient">Order</span>{' '}
      </h1>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {marketPlaces.map((item, index) => (
          <a href={item.link} key={index}>
            <motion.div
              variants={fadeIn('up', 'spring', index * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4 bg-black-gradient py-5 px-10 rounded-3xl"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="md:w-[200px] w-full h-full rounded-[32px] object-cover"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-dimWhite">
                    {item.subtitle}
                  </p>
                </div>
                <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white hover:bg-secondary cursor-pointer">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  </section>
)

export default Insights
