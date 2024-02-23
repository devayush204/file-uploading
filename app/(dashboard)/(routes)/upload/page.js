import React from 'react'
import UploadForm from './_components/UploadForm'

const Upload = () => {
  return (
    <div className='p-5 px-8 md:px-32'>
      <h2 className='text-[25px] font-semibold m-5 text-center '>Start Uploading files and Share it.</h2>
      <UploadForm/>
    </div>
  )
}

export default Upload