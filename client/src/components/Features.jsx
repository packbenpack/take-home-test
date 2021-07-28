import React from 'react'
import styles from '../Styles/Features.module.css'
import homeHygiene from '../../../front-end-dev-test-assets/home-hygiene.svg'
import homeRetention from '../../../front-end-dev-test-assets/home-retention.svg'
import homeLab from '../../../front-end-dev-test-assets/home-lab.svg'
import homeExpertise from '../../../front-end-dev-test-assets/home-expertise.svg'

const Features = () => {
  return (
    <div className={styles.featuresStatement}>
      <div className={styles.featuresInfo}>
        <h2 className={styles.header}>LOREM IPSUM</h2>
        <p className={styles.featuresText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus turpis sagittis nisi gravida cursus. Nunc massa urna, tristique vitae bibendum sit amet, aliquet sit amet enim. Nulla sed facilisis magna, vel malesuada ligula. Integer aliquet ante dignissim, rhoncus purus ac, convallis dolor. Maecenas et odio euismod, tempus metus et, consequat dolor. Cras consequat eget erat vitae euismod. Nunc vel feugiat nulla, vitae varius tortor. </p>
        <p className={styles.featuresLearnMore}> > Lorem Ipsum </p>
      </div>
        <div className={styles.featuresLogos}>
          <div className={styles.featuresIconsBundle}>
            <div>
              <img src={homeExpertise} className={styles.featuresIcons}></img>
              <p>LOREM</p>
            </div>
            <div>
              <img src={homeLab} className={styles.featuresIcons}></img>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div className={styles.featuresIconsBundle}>
            <div>
              <img src={homeHygiene} className={styles.featuresIcons}></img>
              <p>LOREM IPSUM</p>
            </div>
            <div>
              <img src={homeRetention} className={styles.featuresIcons}></img>
              <p>LOREM</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features
