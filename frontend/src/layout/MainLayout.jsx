import React from 'react'
import SideNav from '../pages/SideNav'
import Home from '../pages/Home'
import RightSide from '../pages/RightSide'

const MainLayout = () => {
  return (
    <div className=' flex h-[100%]'>
        <SideNav />
        <Home />
        <RightSide />
    </div>
  )
}

export default MainLayout