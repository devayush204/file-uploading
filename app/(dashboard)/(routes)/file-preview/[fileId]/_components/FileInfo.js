import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const FileInfo = ({ file }) => {
    const [fileType, setfileType] = useState()

    useEffect(() => {
        file && setfileType(file?.fileType.split('/')[0]);
        console.log(fileType);
    }, [file])

    return file && (
        <div className='text-center border flex justify-center m-4 flex-col p-2 rounded-md border-blue-200'>
            <Image alt='heheh' src={fileType == 'image' ? file?.fileUrl : '/file.png'} height={200} width={200} className='h-[200px] rounded-md object-contain' />
            <div>
                <h2 className='overflow-hidden'>{file.fileName}</h2>
                <h2 className='text-gray-400 text-[13px]'>
                    {file.type? "file.type" : "Image-png"}
                </h2>
            </div>
        </div>
    )


}

export default FileInfo