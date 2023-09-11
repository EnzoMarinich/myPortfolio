"use client";
import style from "./page.module.css";
import { Landing } from "./components/landing/Landing";
import { About } from "./components/about/About";
import Projects from "./components/projects/Projects";
import { Navbar } from "./components/navbar/Navbar";
import { Contact } from "./components/contact/Contact";
import { Stack } from "./components/stack/Stack";
import { Footer } from "./components/footer/Footer";
import { themeDarkContext } from "./useContext/theme";
import DarkMode from "./components/darkMode/darkMode";
import { useContext } from "react";

export default function Home() {

  const {themeDark} = useContext(themeDarkContext)

  return (
      <main className={`${style.container} ${themeDark? style.dark : style.clear}`}>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Stack />
        <Contact/>
        <Footer />
        <DarkMode/>
      </main>
  );
}
