import React from 'react'

const FileBar = () => {
    return (
        <div>
            <div className='px-3 py-2 bg-gray-100 w-full my-1 flex items-center justify-between text-left gap-8' >
                <div className=' w-[10%]'>
                    <h5>S.no</h5>
                </div>
                <div className=' w-[20%]'>
                    <h5>UserName</h5>
                </div>
                <div className=' w-[30%]'>
                    <h5>Filename</h5>
                </div>
                <div className=' w-[10%]'>
                    <h5>FileType</h5>
                </div>
                <div className=' w-[10%]'>
                    <h5>FileSize</h5>
                </div>
                <div className=' w-[10%] text-center  '>
                    <h5>Password?</h5>
                </div>
                <div className=' w-[10%] text-right'>
                    <h5>Download link</h5>
                </div>
            </div>
        </div>
    )
}

export default FileBar