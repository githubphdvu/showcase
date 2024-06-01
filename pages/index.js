//(8:00) https://www.youtube.com/watch?v=TUajCwXGxIo&list=PLaBeGKL1tOU3Gl_x2EzOMPPpAWq9znZWt&index=13
//https://github.com/rrs301/ninja-project
//(33:00 NextAuth,Google IDs) (1:16:37  Firebase, 1:21:00 add data to Firebase)
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import { useEffect, useState } from 'react'
import ProjectList from '../components/Profile/ProjectList'

export default function Home() {

  const db=getFirestore(app)
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
    getAllProjects();
  },[])
  const getAllProjects=async()=>{
    const q = query(collection(db, "Projects"),
    orderBy("id","desc")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setProjects(projects=>[...projects,doc.data()]);
    });
  }
  return (
    <div className='p-5'>
      <h2 className='text-[25px] mb-[-15px]'>All Latest Projects</h2>
      {projects?
      <ProjectList userProject={projects} />:null}
    
    </div>
  )
}
