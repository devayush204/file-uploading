import React from 'react'

const ProgressBar = ({progress=40}) => {
  return (
    <div className='bg-gray-400 w-full  mt-3 rounded-full'>
        <div className=' bg-primary text-white rounded-full 'style={{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}
        </div>
        
        
    </div>
  )
}

export default ProgressBar