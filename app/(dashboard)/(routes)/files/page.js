// import { UserButton } from '@clerk/nextjs'
// import React from 'react'

// const Files = () => {
//   return (
//     <div>Files
//         <UserButton afterSignOutUrl='/' />
//     </div>
//   )
// }

// export default Files


"use client"
import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "..//..//..//..//firebaseConfig"
import FileDetails from './_components/FileDetails';
import SearchFile from './_components/SearchFile';
import FileBar from './_components/FileBar';


const Files = () => {

    const db = getFirestore(app);
    const [FilesData, setFilesData] = useState([])
    const [originalFilesData, setOriginalFilesData] = useState([]);

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "uploadedFile"));

            const filesArray = [];

            querySnapshot.forEach((doc) => {
                filesArray.push(doc.data());
            });
            setFilesData(filesArray);
            setOriginalFilesData(filesArray);
            console.log("Data loaded successfully");
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    const handlesearch = (text) => {
        if (text.trim() === "") {
            setFilesData(originalFilesData);
        }
        else {

            const searchData = originalFilesData.filter((file) =>
                file.filename.toLowerCase().includes(text.toLowerCase())
            );

            setFilesData(searchData);
        }
    }


    return (
        <div className='flex flex-col gap-4 p-4'>
            <div>
                <SearchFile handlesearch={handlesearch} />
            </div>
            <div>
                <FileBar />
                <FileDetails FilesData={FilesData} fetchData={fetchData} />
            </div>

        </div>
    )
}

export default Files