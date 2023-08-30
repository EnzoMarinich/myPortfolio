import React from 'react'
import style from "./Projects.module.css"
import imgFood from "../../../../public/PiRecipes.png"
import imgMighty from "../../../../public/MightyMonkey.png"
import {FaMagnifyingGlass} from "react-icons/fa"


const Projects = () => { 
  return (
    <section id='projects' className={style.section}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Projects</h1>
          <span>Here I show you some of my favorite projects...</span>
        </div>
        <div className={style.projectsContainer}>
          <a href="">
            <div className={style.cardContainer}>
              <div className={style.cardImg} style={{backgroundImage:`url(${imgMighty.src}?`}}>
              </div>
              <button>Visit Site</button>
              <div className={style.cardDescription}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum alias nulla dolorem laudantium maxime, iusto provident quis voluptatibus sapiente ipsum maiores dolorum amet voluptatem unde, eveniet asperiores aliquid? Nostrum iure totam nesciunt delectus vel id laudantium obcaecati officia ex!</p>
                <strong className={style.detail}>Abril-2023 - Mighty Monkey Club - Full Stack</strong>
              </div>
            </div>
          </a>
          <a href="">
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