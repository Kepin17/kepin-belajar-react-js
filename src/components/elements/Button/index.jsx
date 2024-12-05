import React from 'react'
import style from './button.module.css'

const Button = (props) => {
    const {children , type='button'} = props
  return (
    <button className={style.button} type={type}>{children}</button>
  )
}

export default Button