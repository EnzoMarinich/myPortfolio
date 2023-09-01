"use client"
import React, { useEffect, useState } from 'react'
import style from "./Navbar.module.css"
import { AiOutlineHome , AiOutlineFolderAdd} from 'react-icons/ai';
import {BsPerson} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"

export const Navbar = () => {
    const [ubication , setUbication] = useState("")

    const handleScroll = ()=>{
        setUbication(window.scrollY)
    }


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[])


  return (
    <div className={style.container}>
        <a href="#landing" className={ubication <= 550? style.active : style.inactive}><div><AiOutlineHome/></div></a>
        <a href="#about" className={ubication > 550 && ubication < 1600? style.active : style.inactive}><div><BsPerson/></div></a>
        <a href="#projects" className={ubication >= 1600 && ubication < 2400? style.active : style.inactive}><div><AiOutlineFolderAdd/></div></a>
        <a href="#stack" className={ubication >= 2400? style.active : style.inactive}><div><BiMessageDetail/></div></a>
        {/* <a href="#contact" className={ubication >= 2700? style.active : style.inactive}><div><BiMessageDetail/></div></a> */}
    </div>
  )
}
