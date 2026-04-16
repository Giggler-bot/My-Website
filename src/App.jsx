import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import  About  from "./Components/About"
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio"

export default function App() {
  return ( 
     <div className="min-h-screen text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </div>
  )
}