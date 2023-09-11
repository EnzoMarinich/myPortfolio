"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from "./Navbar.module.css"
import { AiOutlineHome , AiOutlineFolderAdd} from 'react-icons/ai';
import {BsPerson} from "react-icons/bs"
import {BiMessageDetail, BiCategoryAlt} from "react-icons/bi"
import { themeDarkContext } from '@/app/useContext/theme';

export const Navbar = () => {
    const [ubication , setUbication] = useState("")
    const {themeDark} = useContext(themeDarkContext)


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
    <div className={`${style.container} ${themeDark? style.dark : style.clear}`}>
        <a href="#landing" className={ubication <= 550? themeDark? style.active : style.activeClear : themeDark? style.inactive : style.inactiveClear}><div><AiOutlineHome/></div></a>
        <a href="#about" className={ubication > 550 && ubication < 1600?  themeDark? style.active : style.activeClear : themeDark? style.inactive : style.inactiveClear}><div><BsPerson/></div></a>
        <a href="#projects" className={ubication >= 1600 && ubication < 2400?  themeDark? style.active : style.activeClear : themeDark? style.inactive : style.inactiveClear}><div><AiOutlineFolderAdd/></div></a>
        <a href="#stack" className={ubication >= 2400 && ubication < 3600?  themeDark? style.active : style.activeClear : themeDark? style.inactive : style.inactiveClear}><div><BiCategoryAlt/></div></a>
        <a href="#contact" className={ubication >= 3600?  themeDark? style.active : style.activeClear : themeDark? style.inactive : style.inactiveClear}><div><BiMessageDetail/></div></a>
    </div>
  )
}
