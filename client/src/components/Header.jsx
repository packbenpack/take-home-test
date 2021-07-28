import React, { useState } from 'react'
import styles from '../Styles/Header.module.css'
import RoosterGrinLogo from '../../../front-end-dev-test-assets/logo-white.svg'

const Header = () => {
  const [defaultBtn, setDefaultBtn] = useState(true);

  return (
    <div className={styles.header}>
      <img className={styles.rgLogo} src={RoosterGrinLogo} alt="React Logo" />
      <div className={styles.heroLogo}>
        <div className={styles.logoTextA}>WELCOME TO</div>
        <div className={styles.logoTextB}>Rooster Grin</div>
      </div>
      <button className={(defaultBtn ? styles.mainBtn : styles.flippedBtn)} onClick={() => setDefaultBtn(!defaultBtn)}>BUTTON BUTTON</button>
    </div>
  )
}

export default Header
