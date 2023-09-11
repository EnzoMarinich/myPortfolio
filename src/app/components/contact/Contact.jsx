import React, { useContext, useEffect, useState } from "react";
import style from "./Contact.module.css";
import { themeDarkContext } from "@/app/useContext/theme";

export const Contact = () => {

  const {themeDark} = useContext(themeDarkContext)

  return (
    <section id="contact" className={style.section}>
      <div className={style.container}>
        <div className={`${style.titleContainer} ${themeDark? {}: style.titleClear}`}>
          <h1>Contact</h1>
          <span>Here I show you some of my favorite projects...</span>
        </div>
        <div className={style.formContainer}>
          {/* <div className={style.title}>
            <span>Contact Me</span>
          </div> */}
          <div className={`${style.form} ${themeDark? {} : style.formClear}`}>
            <form
              action="https://formsubmit.co/marinichenzo@gmail.com"
              method="POST"
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <input type="text" name="message" autoComplete="none" />
              </div>
              <button className={`${style.enviar} ${themeDark? style.enviarDark: style.enviarClear}`}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
