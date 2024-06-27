import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
import image from '../assets/spacejoy.jpg'


type Props = {
}

const Card = (props: Props) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image src={image} alt='Space Joy' width={290} className={styles.imagea}/>
        </div>
        <div className={styles.below}>
          <div className={styles.exterior}>
          <p className={styles.interior}>Interior</p>
          </div>
          <h4 className={styles.h4}>Top 5 Living Room Inspirations</h4>
          <p className={styles.curated}>Curated vibrants colors for your living, make it pop & calm in the same time</p>
          <div className={styles.readMore}> 
            Read More -{`>`}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card