"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

const layout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
  return (
    <div>
      <div className=' h-full w-64 flex-col fixed inset-y-0 z-50 md:flex  hidden'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <TopHeader/>
        {children}
      </div>
    </div>
  )
}

export default layout