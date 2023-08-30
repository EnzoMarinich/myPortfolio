import React from "react";
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





export const Stack = () => {
  const stack = [
    { icon: html5.src, name: "HTML", link: "https://lenguajehtml.com/html/" },
    { icon: css.src, name: "CSS", link: "https://lenguajecss.com/css/introduccion/que-es-css/" },
    { icon: js.src, name: "Javascript", link: "https://lenguajejs.com/javascript/" },
    { icon: next.src, name: "Next.js", link: "https://nextjs.org/" },
    { icon: react.src, name: "React", link: "https://es.react.dev/" },
    { icon: redux.src, name: "Redux", link: "https://redux.js.org/" },
    { icon: boostrap.src, name: "Bootstrap", link: "https://getbootstrap.com/" },
    { icon: tailwind.src, name: "Tailwind CSS", link: "https://tailwindui.com/" },
    { icon: node.src, name: "Node.js", link: "linhttps://nodejs.org/esk" },
    { icon: mySql.src, name: "MySQL", link: "https://www.mysql.com/" },
    { icon: postgre.src, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { icon: sequelize.src, name: "Sequelize", link: "https://sequelize.org/" },
    { icon: git.src, name: "GIT", link: "https://git-scm.com/" },
    { icon: firebase.src, name: "Firebase", link: "https://firebase.google.com/" },
  ];
  return (
    <section id="stack" className={style.container}>
      <div className={style.title}>
        <h1>Technology Stack</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          repudiandae.
        </span>
      </div>
      <div className={style.cardContainer}>
        {stack.map((stack) => {
          return (
            <a target="_blank" href={stack.link} key={stack.name} className={style.card}>
              <div className={style.cardDiv}>
                <img className={style.cardImg} src={stack.icon} alt="" />
                <span>{stack.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};


