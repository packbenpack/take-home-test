import React from 'react'
import styles from '../Styles/Clients.module.css'

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.clientsInfo}>
        <h2>LOREM IPSUM</h2>
        <div>
        <p className={styles.clientsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus turpis sagittis nisi gravida cursus. Nunc massa urna. </p>
        </div>
        <button className={styles.clientsBtn}>BUTTON BUTTON</button>
      </div>
    </div>
  )
}

export default Clients
