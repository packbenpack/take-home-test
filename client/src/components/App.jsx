import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import styles from '../Styles/App.module.css';
import Carousel from './Carousel.jsx'
import Features from './Features.jsx'
import Header from './Header.jsx'
import MissionStatement from './MissionStatement.jsx'
import Pricing from './Pricing.jsx'
import Clients from './Clients.jsx'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MissionStatement />
      <Pricing />
      <Features />
      <Clients />
      <Carousel />
      <div className={styles.social}>
        <p>Hire Me:</p>
          <div>
          <a href="http://www.github.com/packbenpack">
            <FaGithub className={styles.logo}/>
          </a>
          <a href="http://www.linkedin.com/in/packbenpack">
            <FaLinkedin className={styles.logo}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;