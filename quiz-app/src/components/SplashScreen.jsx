import React from 'react'
import styles from './SplashScreen.module.css'

export default function SplashScreen({ onFinish }) {
  return (
    <div className={styles.overlay} onAnimationEnd={onFinish}>
      <img src="../splash_screen.png" alt="Logo" className={styles.logo} />
    </div>
  )
}
