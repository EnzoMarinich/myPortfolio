import React, { useContext, useState } from 'react'
import style from "./Projects.module.css"
import imgFood from "../../../../public/PiRecipes.png"
import imgMighty from "../../../../public/MightyMonkey.png"
import imgMovies from "../../../../public/MoviesReact.png"
import { themeDarkContext } from '@/app/useContext/theme'




const Projects = () => { 
  const {themeDark} = useContext(themeDarkContext)
  const projects = [
    {
      href: "https://mighty-monkey-pf.vercel.app/",
      img : imgMighty.src,
      description: "Mighty Monkey Club is a management platform for a sports club, where you can manage your members, sports, courts, rentals, among other things. With a view for users and a dashboard for administrators",
      tecn: "React.js, Next.js, Tailwind CSS, Redux Thunks, Mercado Pago, Sequelize.js , PostgreSQL.",
      footer: "Abril-2023 - Mighty Monkey Club - Full Stack"
    },
    {
      href: "https://pi-food-henna.vercel.app/",
      img : imgFood.src,
      description: "An application that shows you hundreds of recipes from an API, with their ingredients, steps and score. You can also create a recipe that will be stored in the database so other users can find out about it.",
      tecn: "React.js, Tailwind CSS, Redux, Express, Sequelize.js , PostgreSQL.",
      footer: "Abril-2023 - Mighty Monkey Club - Full Stack"
    },
    {
      href: "https://movies-react-phi.vercel.app/",
      img : imgMovies.src,
      description: "It is an application that fetches movies from an API and re-renders them. It has pagination, each movie has its own details and a search to filter by name.",
      tecn: "React.js, CSS, Redux ",
      footer: "Enero-2023 - Movies React - Frontend"
    }
  ]


  const handleMore = ()=>{
    setCurrentCard(currentCard + 1)
  }

  return (
    <section id='projects' className={style.section}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1 style={themeDark? {} : {color: "rgb(14 149 169)"}}>Projects</h1>
          <span>Here I show you some of my favorite projects...</span>
        </div>
        <div className={style.projectsContainer} >
            {projects.map(e=>{
              return (
                <a key={e.href} target="_blank" href={e.href}>
                  <div className={style.cardContainer}>
                    <div className={style.cardImg} style={{backgroundImage: `url(${e.img}?`}}>
                    </div>
                    <button>Visit Site</button>
                    <div className={`${style.cardDescription} ${themeDark? style.dark : style.clear}`}>
                      <p>{e.description}</p>
                      <p>Tecnologyes:<strong>{e.tecn}</strong></p>
                      <strong className={style.detail}>{e.footer}</strong>
                    </div>
                  </div>
                </a>
              )
            })}
        </div>
          {/* <button onClick={handleMore} className={style.more}>More Proyects</button> */}
      </div>
    </section>
  )
}

export default Projects