import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Stats from "./components/Stats"
import Contacts from "./components/Contacts"

function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Stats />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} 
          Annette Ngugi. 
          All rights reserved.</p>
      </footer>
      
      
    </div>
  )
}

export default App
