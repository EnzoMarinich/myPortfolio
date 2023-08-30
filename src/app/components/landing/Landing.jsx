"use client"
import React, { useEffect } from "react";
import style from "./Landing.module.css";
import Image from "next/image";
import foto from "../../../../public/fotoPerfil-sinfondo-preview.png";
import { Links } from "../Links";

export const Landing = () => {

  const texts = [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer"
  ];
  
  
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  

  const changeText = () => {
    const currentText = texts[index];
    const container = document.querySelector("#textChanging");
    const currentTextLength = currentText.length;
  
    if (isDeleting) {
      container.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
  
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }
    } else {
      container.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
  
      if (charIndex === currentTextLength) {
        isDeleting = true;
      }
    }
  
    const speed = isDeleting ? 50 : 150; // Velocidad de escritura y borrado
    setTimeout(changeText, speed);
  };
  

  useEffect(() => {
    changeText();
  }, []);


  return (
    <section id="landing" className={style.container}>
      <div className={style.title}>
        <span style={{marginTop:"10px"}}>
          Chaco | Argentina
        </span>
      </div>
      <div className={style.perfil}>
        <div className={style.desc}>
          <h1>Enzo Marinich</h1>
          <div style={{display:"flex", marginTop:"-25px"}}>
            <span className={style.guion}>-</span>
            <span className={style.changingText} id="textChanging"></span>
            <span className={style.cursor} id="cursor">|</span>
          </div>
          <div className={style.links}>
            <Links/>
          </div>
        </div>
        <div className={style.image}>
          <Image src={foto} alt="enzo" />
        </div>
      </div>
    </section>
  );
};
