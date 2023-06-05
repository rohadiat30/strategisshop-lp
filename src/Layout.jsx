import React from 'react'
import { About, Hero, LinkTo, Method, OurProduct, Relation } from './components'
import styles from './Styles'

const Layout = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <OurProduct />
          <About />
          <Method />
          <Relation />
          <LinkTo />
        </div>
      </div>
    </div>
  )
}

export default Layout
