import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import style from "./Links.module.css"

export const Links = () => {

    const handleEnviarCorreo = () => {
        const destinatario = 'marinichenzo@gmail.com';
        const asunto = 'Asunto del correo';
        const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`;
    
        window.location.href = mailtoURL;
      }

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
            return (<a target="_blank" href={e.link == "link" ? null :e.link} key={e.link} onClick={e.link == "link"? handleEnviarCorreo :null}>
                <e.icon/>
            </a>)
        })}
        <a href="../../../public/CV.docx" download>cv</a>
    </div>
  )
}
