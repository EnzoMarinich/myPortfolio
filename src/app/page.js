"use client"
import style from "./page.module.css"
import { Landing } from './components/landing/Landing'
import { About } from "./components/about/About"
import Projects from "./components/projects/Projects"
import { Navbar } from "./components/navbar/Navbar"
import { Contact } from "./components/contact/Contact"
import { Stack } from "./components/stack/Stack"

export default function Home() {
  
  return (
    <main className={style.container}>
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Stack/>
      <Contact/>
    </main>
  )
}
