"use client"
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SideNav = () => {
    const menuList = [
        {
            id:1,
            name: "Upload",
            icon: Upload,
            path: '/upload'
        },
        {
            id:2,
            name: "Files",
            icon: File,
            path: '/files'
        },
        {
            id:3,
            name: "Upgrade",
            icon: Shield,
            path: '/upgrade'
        },
    ]

    const [activeIndex, setActiveIndex] = useState();
  return (
    <div className='h-full shadow-sm border-r'>
        <div className='p-5 border-b'>
            <Image src={"/logo.png"} width={195} height={195} />
        </div>

        <div className='flex flex-col float-left w-full'>
            {menuList.map((item, index)=>(
                <button className={`flex w-full text-gray-500 gap-3 p-4 px-6 hover:bg-gray-100 ${activeIndex==index?'bg-blue-50 text-primary':null}`}
                onClick={()=>setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    </div>
  )
}

export default SideNav