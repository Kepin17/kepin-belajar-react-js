import React from 'react'
import styles from "./card.module.css"
import Button from '../../elements/Button'

const Card = (props) => {
    const {title, children} = props
  return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{children}</p>
            <Button>Read More</Button>
        </div>
  )
}

export default Card