"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { app } from '../../../../firebaseConfig'

const Upload = () => {
  const [progress, setProgress] = useState();
  const [fileDocId, setfileDocId] = useState()
  const router = useRouter();

  const { user } = useUser();
  const storage = getStorage(app);
  const db = getFirestore(app);


  const fileUpload = (file) => {
    const metaData = {
      contentType: file.type
    }

    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type)

    //function to ensure file is uploading by progress
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        //t get the downloadURL
        setProgress(progress)
        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => saveInfo(file, downloadURL))
            .then((docId) => router.push('/file-preview/' + docId))
            .catch(error => console.error('Error:', error));
        }
      });
  }

  //function to generate random srting
  const generateRandomString = () => {
    const characters = "ABCDEFGHIJKLOMONOPjdjshdjshdj1878327831";
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), { 
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
    setfileDocId(docId);
    return docId;

  } 



  return (
    <div className='p-5 px-8 md:px-32'>
      <h2 className='text-[25px] font-semibold m-5 text-center '>Start Uploading files and Share it.</h2>
      <UploadForm progress={progress} uploadBtnClick={(file) => fileUpload(file)} />
    </div>
  )
}

export default Upload