import { Copy } from 'lucide-react';
import React, { useState } from 'react'

const FileShareForm = ({file, onPassSave}) => {
    const [isPassEnable, setIsPassEnable] = useState(false);
    const [password, setPassord] = useState('');
  return  file&&(
    <div className='flex flex-col gap-2'>
        <div>
            <label className='text-[14px] text-gray-500 '>Short Url</label>
            <div className="flex gap-5 p-2 border rounded-md">
                <input type="text" value={file?.shortUrl} disabled className='disabled:text-gray-500 bg-transparent outline-none w-full' />
                <Copy className='text-gray-400 hover:text-gray-600 cursor-pointer' />
            </div>
        </div>
        <div className='gap-3 flex mt-5' >
            <input type="checkbox" onChange={(e)=> setIsPassEnable(e.target.value)} />
            <label >Enable Password</label>
        </div>

        {isPassEnable?
            <div className='flex gap-3 items-center'>
                <div className='border rounded-md w-full p-2'>
                    <input type="password" className='disabled:text-gray-500 bg-transparent outline-none '
                    onChange={(e)=> setPassord(e.target.value)} />
                </div>
                <button className='p-2 bg-primary text-white rounded-md disabled:bg-gray-500 hover:bg-primary'
                disabled={password?.length<3}
                onClick={()=> onPassSave(password)}>
                    Save
                </button>
            </div>:null    
    }

    <div className='flex flex-col gap-3 border px-3 py-4 rounded-md'>
        <div className='flex flex-col text-gray-500'>
            <label className='text-[13px]'>Send file to Email</label>
            <input className='w-full p-2 border rounded-md ' type="text" placeholder='YourEmail@gmail.com' />
        </div>
        <button className='text-white w-full bg-primary text-center p-2 rounded-md'>Send Email</button>
    </div>
    </div>
  )
}

export default FileShareForm