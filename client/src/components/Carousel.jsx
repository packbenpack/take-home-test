import React from 'react'
import styles from '../Styles/Carousel.module.css'
import CarouselInner from './CarouselInner.jsx'
import { FaStar } from "react-icons/fa"

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTitle}>
        <p>Lorem Ipsum Dolor Sit Amet</p>
        <div>
          <FaStar className={styles.stars}/>
          <FaStar className={styles.stars}/>
          <FaStar className={styles.stars}/>
          <FaStar className={styles.stars}/>
          <FaStar className={styles.stars}/>
        </div>
      </div>
      <div>
        <CarouselInner />
      </div>
    </div>
  )
}

export default Carousel
