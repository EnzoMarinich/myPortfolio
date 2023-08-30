import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import style from "./Links.module.css"

export const Links = () => {
    const obj = [
        {
            icon : FaLinkedin,
            link : "https://www.linkedin.com/in/enzo-marinich-942a76264/"
        },
        {
            icon : FaGithub,
            link : "https://github.com/EnzoMarinich"
        },
        {
            icon : GrMail,
            link : "link"
        }
    ]
  return (
    <div className={style.container}>
        {obj.map(e=>{
            return (<a target="_blank" href={e.link} key={e.link}>
                <e.icon/>
            </a>)
        })}
    </div>
  )
}
