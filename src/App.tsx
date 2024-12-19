import { About } from "./components/About"
import { Landing } from "./components/Landing"
import { Projects } from "./components/Projects"
function App() {
  return (
    <div className="flex flex-col w-screen bg-steel">
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App
