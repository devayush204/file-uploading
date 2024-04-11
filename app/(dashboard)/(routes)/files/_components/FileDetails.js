"use client"
import React, { useState, useEffect } from 'react'

import Link from 'next/link';
import { Check, X } from 'lucide-react';


const FileDetails = ({ FilesData, fetchData }) => {

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            {FilesData.map((item, index) => {
                return (
                    <div className='px-3 py-2 bg-gray-100 w-full my-1 flex items-center justify-between text-left gap-8' key={item.id}>
                        <div className=' w-[10%]'>
                            <h5>{index + 1}</h5>
                        </div>
                        <div className=' w-[20%]'>
                            <h5>{item.userName}</h5>
                        </div>
                        <div className=' w-[30%]'>
                            <h5>{item.fileName}</h5>
                        </div>
                        <div className=' w-[10%]'>
                            <h5>{item.fileType}</h5>
                        </div>
                        <div className=' w-[10%]'>
                            <h5>{(item.fileSize / 1024 / 1024).toFixed(2)}MB</h5>
                        </div>
                        <div className=' w-[10%] flex items-center justify-center '>
                            <h5>{item?.password.length > 3 ? <Check className='text-green-500' /> : <X className='text-red-500' />}</h5>
                        </div>
                        <div className=' w-[10%] text-center'>
                            <Link href={item?.shortUrl}>
                                <h5>download</h5>
                            </Link>
                        </div>
                    </div>
                )
            })}
            {/* <button onClick={()=> console.log(FilesData)}>click me</button> */}
        </div>
    )
}

export default FileDetails