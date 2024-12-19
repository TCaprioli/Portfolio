import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Landing } from "./components/Landing"
import { Projects } from "./components/Projects"
function App() {
  return (
    <div className="flex flex-col w-screen bg-steel">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
