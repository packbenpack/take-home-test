import React from 'react'
import styles from '../Styles/MissionStatement.module.css'
import missionPic from '../../../front-end-dev-test-assets/img-1.jpg'

const MissionStatement = () => {
  return (
    <div className={styles.missionStatement}>
      <div className={styles.missionInfo}>
        <h2 className={styles.header}>LOREM IPSUM</h2>
        <p className={styles.missionText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus turpis sagittis nisi gravida cursus. Nunc massa urna, tristique vitae bibendum sit amet, aliquet sit amet enim. Nulla sed facilisis magna, vel malesuada ligula. Integer aliquet ante dignissim, rhoncus purus ac, convallis dolor. Maecenas et odio euismod, tempus metus et, consequat dolor. Cras consequat eget erat vitae euismod. Nunc vel feugiat nulla, vitae varius tortor. </p>
        <p className={styles.missionLearnMore}> > Lorem Ipsum </p>
      </div>
        <div className={styles.missionPicture}>
      </div>
    </div>
  )
}

export default MissionStatement
