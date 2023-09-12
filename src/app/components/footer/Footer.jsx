import React, { useContext } from 'react'
import style from "./Footer.module.css"
import { Links } from '../Links'
import logo1 from "../../../../public/logo1.png"
import { themeDarkContext } from '@/app/useContext/theme'
import Image from 'next/image'

export const Footer = () => {

  const {themeDark}= useContext(themeDarkContext)

  return (
    <footer className={`${style.footer} ${themeDark? style.dark : style.clear}`}>
        <div className={style.container}>
           <span>Do not hesitate to contact me, and with pleasure we can meet and make your idea come true.</span>
           <Links/>
        </div>
        <span className={style.span}>Created by Enzo Marinich - All rights reserved -  2023 © CopyRight</span>
        <Image className={style.img} src={logo1.src} width={500} height={500}/>
    </footer>
  )
}
