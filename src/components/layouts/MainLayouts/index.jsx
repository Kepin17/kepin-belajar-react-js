import React from 'react'
import Navbar from '../../fragments/Navbar'

const MainLayout = (props) => {
    const {children} = props
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default MainLayout