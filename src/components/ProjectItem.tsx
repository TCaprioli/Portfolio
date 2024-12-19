import { Tech } from "./Tech"

type ProjectItemProps = {
  name: string
  image: string
  links: { live?: string; frontend?: string; backend?: string }
  description: string
  technologies: string[]
  invert?: boolean
}

export const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div
      className={`flex flex-col ${
        props.invert ? "sm:flex-row-reverse" : "sm:flex-row"
      } w-full justify-center pt-6 pb-12 border-b border-b-steel`}
    >
      <div className="flex sm:basis-1/2 px-4 ">
        <img
          src={props.image}
          alt="screenshot"
          className="object-cover w-screen"
        />
      </div>
      <div className="sm:basis-1/2  px-6 max-w-lg">
        <h2 className="text-3xl text-steel font-bold">{props.name}</h2>
        <div className="text-lg text-steel py-2">
          View:{" "}
          {props.links.live && (
            <a
              className="text-cherry hover:underline"
              href={props.links.live}
              target="_blank"
            >
              Live
            </a>
          )}
          {props.links.live && props.links.frontend && <span>{" | "}</span>}
          {props.links.frontend && (
            <a
              className={"text-cherry hover:underline"}
              href={props.links.frontend}
              target="_blank"
            >
              Frontend
            </a>
          )}
          {props.links.frontend && props.links.backend && <span>{" | "}</span>}
          {props.links.backend && (
            <a
              className="text-cherry hover:underline"
              href={props.links.backend}
              target="_blank"
            >
              Backend
            </a>
          )}
        </div>
        <p className="text-lg text-steel py-2">{props.description}</p>
        <div className="pt-4">
          <h3 className="text-2xl text-cherry font-bold mb-4">Built with:</h3>
          <div className="flex flex-row flex-wrap">
            {props.technologies.map((name) => (
              <Tech key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
