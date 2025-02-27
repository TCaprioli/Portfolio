import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"

export function ErrorPage() {
  const error = useRouteError()
  return (
    <div className=" h-screen w-screen">
      {isRouteErrorResponse(error) && error.status === 404 && (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p style={{ color: "red", fontSize: "30px" }}>404 Page Not Found</p>
          <button>
            <Link to="/">Return Home</Link>
          </button>
        </div>
      )}
    </div>
  )
}
