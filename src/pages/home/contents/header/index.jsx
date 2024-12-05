import React from 'react'
import Button from '../../../../components/elements/Button'
import styles from "./header.module.css"

const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <div className={styles.textboxWrapper}>
          <h1>Blog Sederhana</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam vero tenetur exercitationem cum. Esse at minus distinctio, nam est veniam facere blanditiis reprehenderit, expedita hic quasi illo assumenda vel ex fuga beatae in delectus?</p>
          <Button>Read More</Button>
        </div>
      </div>
      <div className={styles.rightContent}>
          <div className={styles.cardContent}>
              <img src="https://images.unsplash.com/photo-1733230585457-8a0f94c57f86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" 
              /> 

              <div className={styles.infoBox}>
                <p>Tech Blog #project</p>
              </div>

              <div className={styles.infoBox}>
                <p>Online 24/7</p>
              </div>
          </div>
      </div>
    </header>
  )
}

export default HomeHeader