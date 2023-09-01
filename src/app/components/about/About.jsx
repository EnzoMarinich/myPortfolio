import React from "react";
import style from "./About.module.css";
import WorkItem from "./WorkItem";

export const About = () => {
  const data = [
    {
      year: "feb-2023",
      title: "Full Stack Developer",
      duration: "4 months",
      details:
        "Course +600 hours at Henry Academy where I carried out 2 individual projects and one group project, acquiring knowledge and experience in technologies such as: Next.js, React.js, Redux, Redux Thunks, Boostrap, Tailwind, Node.js, PostgreSQL, Sequelize, Git, Firebase , entre otras",
    },
    {
      year: "nov-2022",
      title: "React",
      duration: "2 months",
      details:
        "I took a course at Coderhouse Academy, where through classes and work carried out I acquired experience and knowledge in technologies such as: HTML, CSS, Javascript, React.js, Node.js",
    },
    {
      year: "sep-2022",
      title: "Javascript",
      duration: "2 months",
      details:
        "Course held at Coderhouse, where through classes and work, I learned the basics and logic of programming",
    },
    {
      year: "jun-2022",
      title: "Desarrollo Web",
      duration: "2 months",
      details:
        "Course conducted at Coderhouse, where I mainly learned to design and layout web pages with CSS and HTML, using Git, Sass, Bootstrap, among other things.",
    },
  ];

  return (
    <section id="about" className={style.section}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>About Me</h1>
          <span>Here I will tell you a little about my path to being a Full Stack Developer.</span>
        </div>
        <span className={style.aboutMe}>I started the career of Public Accountant in the year 2020 until I found my passion for programming in the year 2022, and since then I have focused only on this incredible world.
Here I will tell you my trajectory...</span>
        <div
          id="work"
          className="max-w-[50%] m-auto p-4 py-16 select-none"
        >
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
  );
};
