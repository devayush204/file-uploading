import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='flex justify-between p-5 border-b items-center  md:justify-end'>
        <AlignJustify className='md:hidden' />
        <Image src={"/logo.png"}  alt="Logo" width={150} height={150} className='md:hidden' />
        <UserButton/>
    </div>
  )
}

export default TopHeader