import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AfroCos } from "./clients/afrocosmetics/index.ts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "clients",
    element: <AfroCos />,
  },
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
