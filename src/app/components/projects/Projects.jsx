import React from 'react'
import style from "./Projects.module.css"
import imgFood from "../../../../public/PiRecipes.png"
import imgMighty from "../../../../public/MightyMonkey.png"



const Projects = () => { 
  return (
    <section id='projects' className={style.section}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Projects</h1>
          <span>Here I show you some of my favorite projects...</span>
        </div>
        <div className={style.projectsContainer}>
          <a target="_blank" href="https://mighty-monkey-pf.vercel.app/">
            <div className={style.cardContainer}>
              <div className={style.cardImg} style={{backgroundImage:`url(${imgMighty.src}?`}}>
              </div>
              <button>Visit Site</button>
              <div className={style.cardDescription}>
                <p>Mighty Monkey Club it is a management platform for a sports club, where you could manage your members, sports, courts, rentals, among other things.</p>
                <p>Tecnologyes:<strong> React.js, Next.js, Tailwind CSS, Redux Thunks, Mercado Pago, Sequelize.js , PostgreSQL. </strong></p>
                <strong className={style.detail}>Abril-2023 - Mighty Monkey Club - Full Stack</strong>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://pi-food-henna.vercel.app/">
            <div className={style.cardContainer}>
              <div className={style.cardImg} style={{backgroundImage:`url(${imgFood.src}?`}}>
              </div>
              <button>Visit Site</button>
              <div className={style.cardDescription}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim odit molestias aliquam vitae pariatur cumque, non repellat. Sed, recusandae voluptas.</p>
                <strong className={style.detail}>Abril-2023 - Mighty Monkey Club - Full Stack</strong>
              </div>
           </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects