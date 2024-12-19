import { useState } from "react"
import { useFocusListener } from "../hooks/useFocusListener"

export const NavMenu = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const { ref } = useFocusListener<HTMLDivElement>({
    handleOutOfFocus: () => setDisplay(false),
  })
  return (
    <div className="fixed flex items-center top-0 h-14 z-10" ref={ref}>
      <nav className="flex flex-row border border-charcoal border-t-0 bg-steel p-2  w-screen">
        <ul className="flex flex-row w-full ">
          <li className="p-2 hover:text-cherry">
            <a href="#home">Home</a>
          </li>
          <li className="p-2 hover:text-cherry">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2 hover:text-cherry">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
