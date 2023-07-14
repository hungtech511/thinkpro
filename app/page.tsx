"use client"
import { useEffect } from "react";


const axios = require("axios");

const instance = axios.create({
  baseURL: "https://thinkpro.vn/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});



export default function Home() {

  useEffect(() =>{
      const getData = async () =>{
        let res = await instance.get("front-store/v3/home-setting");
        console.log(res);
        
      }
      getData()
  },[])

  return <>
  hohoh
  </>
}

