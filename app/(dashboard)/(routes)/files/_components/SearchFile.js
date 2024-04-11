"use client"
import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const SearchFile = ({ handlesearch }) => {


    const [search, setsearch] = useState("")




    return (
        <div className='bg-gray-100 w-full items-center flex justify-between py-2 px-3 rounded-md'>
            <div>
                <h2 className='text-[20px] text-gray-500'>All Files</h2>
            </div>
            <div className='flex items-center justify-between gap-4 bg-white p-2 w-[30%] rounded-md'>
                <input type="search" name="" id="" className='outline-none border-none w-full' onChange={(e) => setsearch(e.target.value)} placeholder='search' />
                <Search className='cursor-pointer text-gray-500' onClick={() => handlesearch(search)} />
            </div>
        </div>
    )
}

export default SearchFile