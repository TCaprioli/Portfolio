import { useState } from "react"
import { useFocusListener } from "../hooks/useFocusListener"

export const NavMenu = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const { ref } = useFocusListener<HTMLDivElement>({
    handleOutOfFocus: () => setDisplay(false),
  })
  return (
    <div className="fixed flex flex-col items-center p-6" ref={ref}>
      <button
        className="relative flex bg-steel items-center border border-charcoal font-semibold"
        onClick={() => setDisplay((prev) => !prev)}
      >
        Menu
      </button>
      {display && (
        <nav className=" border border-charcoal border-t-0 bg-steel p-2 rounded-md">
          <ul>
            <li className="py-2 hover:text-cherry">
              <a href="#home">Home</a>
            </li>
            <li className="py-2 hover:text-cherry">
              <a href="#projects">Projects</a>
            </li>
            <li className="py-2 hover:text-cherry">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
