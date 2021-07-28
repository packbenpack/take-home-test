import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from '../styles/CarouselInner.module.css'

const CarouselInner = () => (
  <Carousel plugins={['arrows']}>
    <div className={styles.slide}>
      <p className={styles.title}>
        John Doe 08/08/2019
      </p>
      <p className={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus turpis sagittis nisi gravida cursus. Nunc massa urna, tristique vitae bibendum sit amet, aliquet sit amet enim.
      </p>
    </div>
    <div className={styles.slide}>
      <p className={styles.title}>
        Joe Schmo 12/22/2020
      </p>
      <p className={styles.body}>
        Aliquam vehicula dignissim mi, vitae imperdiet ipsum facilisis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc venenatis nisl eu felis elementum, vitae interdum ex tincidunt. Pellentesque nibh sapien, aliquam at odio id, blandit eleifend enim.
      </p>
    </div>
    <div className={styles.slide}>
      <p className={styles.title}>
        Jane Shmane 03/14/21
      </p>
      <p className={styles.body}>
        Nulla sed facilisis magna, vel malesuada ligula. Integer aliquet ante dignissim, rhoncus purus ac, convallis dolor. Maecenas et odio euismod, tempus metus et, consequat dolor. Cras consequat eget erat vitae euismod. Nunc vel feugiat nulla, vitae varius tortor. Aliquam ac justo suscipit, varius nisl et, consectetur nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  </Carousel>
);

export default CarouselInner;