import React from 'react'
import styles from "./card.module.css"
import Button from '../../elements/Button'

const Card = (props) => {
    const {title, children, linkTo} = props
  return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{children}</p>
            <a href={linkTo}>
                <Button>Read More</Button>
            </a>
        </div>
  )
}

export default Card