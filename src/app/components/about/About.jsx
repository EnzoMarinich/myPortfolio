import React from 'react'
import style from "./About.module.css"
import WorkItem from './WorkItem';

export const About = () => {

  const data = [
    {
      year: "feb-2023",
      title: "Full Stack Developer",
      duration: "4 months",
      details:
        "Course +600 hours at the Henry Academy where I acquire knowledge and experience in technologies such: ...",
    },
    {
      year: "nov-2022",
      title: "React",
      duration: "2 months",
      details:
      "Course taken at Coderhouse Academy, where I acquired knowledge mainly in: ...",
    },
    {
      year: "sep-2022",
      title: "Javascript",
      duration: "2 months",
      details:
      "Course taken at Coderhouse Academy, where I acquired knowledge mainly in: ...",
    },
    {
      year: "jun-2022",
      title: "Desarrollo Web",
      duration: "2 months",
      details:
        "Course carried out at Coderhouse Academy, where I took my first steps in this world of technology, acquiring knowledge in: ...",
    }
  ];

  return (
    <section id='about' className={style.section}>
      <div className={style.container}>

      <div className={style.titleContainer}>
        <h1>Experience</h1>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 select-none">
      {/* <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work Experience</h1> */}
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          title={item.title}
          year={item.year}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div> 

    </div>
    </section>
  )
}
