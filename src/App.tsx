import { About } from "./components/About"
import { Landing } from "./components/Landing"
function App() {
  return (
    <div className="flex flex-col w-screen bg-steel">
      <Landing />
      <About />
    </div>
  )
}

export default App
