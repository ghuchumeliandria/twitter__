'use client'
import MainContainer from "./pages/MainContainer/MainContainer";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/commons/firebase/firebase'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const [user] = useAuthState(auth)
  const router = useRouter()
  console.log(user)
  useEffect(() =>{
    if(!user){
      router.push('/')
    }
    else{
      router.push('/pages/Twitter')
    }
  },[])
  
  return (
    <>
      <MainContainer />
    </>
  );
}
