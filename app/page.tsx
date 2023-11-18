"use client"
import GlobalContextProvider from "@/Components/Context/GlobalContextProvider";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/HeroSection/Hero";
import Nav from "@/Components/Nav/Nav";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/skills";

export default function Home() {

  return (
    <>
      <GlobalContextProvider>
        <div className="w-full h-auto flex items-start justify-center bg-white text-black_c_1">
          <div className="h-auto w-full 2xl:w-4/5">
            <Nav />
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
          </div>
        </div>
      </GlobalContextProvider>
    </>
  )
}
