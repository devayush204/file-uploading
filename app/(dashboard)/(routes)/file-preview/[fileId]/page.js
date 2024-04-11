"use client"
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { ArrowLeftSquare } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo'
import { app } from '../../../../../firebaseConfig'
import FileShareForm from './_components/FileShareForm'


const FilePreview = ({ params}) => {
  const [file, setFile] = useState();
  const db = getFirestore(app);
  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo()
  }, [])

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params.fileId)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("doc data: ", docSnap.data());

    } else {
      console.log("no data");
    }
    setFile(docSnap.data())
  }

  const onPassSave = async(password) => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    await updateDoc(docRef,{
      password:password
    });
    
  }
  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3' ><ArrowLeftSquare />Go to Upload</Link>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file} />
        <FileShareForm file={file}
        onPassSave={(password)=> onPassSave(password)} />
      </div>
    </div>
  )
}

export default FilePreview