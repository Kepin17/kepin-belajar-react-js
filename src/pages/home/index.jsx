import React from 'react'
import HomeHeader from './contents/header'
import MainLayout from '../../components/layouts/MainLayouts'
import BlogSection from './contents/blog'

const HomePage = () => {
  return (
    <MainLayout>
    <HomeHeader/>
    <BlogSection/>
    </MainLayout>
  )
}

export default HomePage