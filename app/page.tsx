"use client"
import { getUserList } from "@/redux/actions/getHome";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'



export default function Home() {

  const user = useSelector<RootState, any>(state => state.homepage.data)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() =>{
    dispatch(getUserList())
  },[])

  return <>
  hohoh
  </>
}

