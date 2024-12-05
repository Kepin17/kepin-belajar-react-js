import React, { useState } from 'react'
import styles from "./nav.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Blog Sederhana</h1>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navItem} ${isOpen ? styles.active : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#" >Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar