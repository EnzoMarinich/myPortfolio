import React, { useContext } from "react";
import style from "./Stack.module.css";
import html5 from "../../../../public/html5-original.svg";
import next from "../../../../public/next.svg";
import js from "../../../../public/js.svg";
import css from "../../../../public/css.svg";
import react from "../../../../public/react.svg";
import firebase from "../../../../public/firebase.svg";
import git from "../../../../public/git.svg";
import redux from "../../../../public/redux.svg";
import boostrap from "../../../../public/boostrap.svg";
import tailwind from "../../../../public/tailwind.svg";
import node from "../../../../public/node.svg";
import mySql from "../../../../public/mySql.svg";
import postgre from "../../../../public/postgreSQL.svg";
import sequelize from "../../../../public/sequelize.svg";
import sass from "../../../../public/sass.svg";
import { themeDarkContext } from "@/app/useContext/theme";
import Image from "next/image";

export const Stack = () => {
  const { themeDark } = useContext(themeDarkContext);

  const stack = [
    { icon: html5.src, name: "HTML", link: "https://lenguajehtml.com/html/" },
    {
      icon: css.src,
      name: "CSS",
      link: "https://lenguajecss.com/css/introduccion/que-es-css/",
    },
    {
      icon: js.src,
      name: "Javascript",
      link: "https://lenguajejs.com/javascript/",
    },
    { icon: next.src, name: "Next.js", link: "https://nextjs.org/" },
    { icon: react.src, name: "React", link: "https://es.react.dev/" },
    { icon: redux.src, name: "Redux", link: "https://redux.js.org/" },
    {
      icon: boostrap.src,
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: tailwind.src,
      name: "Tailwind CSS",
      link: "https://tailwindui.com/",
    },
    { icon: sass.src, name: "Sass", link: "https://sass-lang.com/" },
    { icon: node.src, name: "Node.js", link: "linhttps://nodejs.org/esk" },
    { icon: mySql.src, name: "MySQL", link: "https://www.mysql.com/" },
    {
      icon: postgre.src,
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
    },
    { icon: sequelize.src, name: "Sequelize", link: "https://sequelize.org/" },
    { icon: git.src, name: "GIT", link: "https://git-scm.com/" },
    {
      icon: firebase.src,
      name: "Firebase",
      link: "https://firebase.google.com/",
    },
  ];
  return (
    <section id="stack" className={style.container}>
      <div className={style.title}>
        <h1 style={themeDark ? {} : { color: "rgb(14, 149, 169)" }}>
          Technology Stack
        </h1>
        <span>Technologies that I have used and learned in my career</span>
      </div>
      <div className={style.cardContainer}>
        {stack.map((stack) => {
          return (
            <a
              target="_blank"
              href={stack.link}
              key={stack.name}
              className={` ${style.card} ${
                themeDark ? style.dark : style.clear
              }`}
            >
              <div className={style.cardDiv}>
                <Image
                  className={style.cardImg}
                  src={stack.icon}
                  width={500}
                  height={500}
                  alt=""
                />
                <span>{stack.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
