import { Tech } from "./Tech"

const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next",
  "Redux",
  "Jest",
  "Playwright",
  "Git",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
]

export const About = () => {
  return (
    <section className="flex flex-col sm:flex-row bg-steel h-screen sm:max-h-[50vh] w-full px-9 py-4 items-center justify-center">
      <div className="flex flex-col sm:basis-1/2 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-serif mb-4">
          About me
        </h2>
        <p className="max-w-2xl">
          Serving 8 years as a Combat Engineer in the Army Reserves taught me a
          lot about grit, attention to detail, and problem-solving. I've taken
          those lessons with me to web development, where I apply the same
          discipline to creating clean, efficient code and building
          user-friendly applications. My experience in both leadership and
          team-based roles enables me to approach complex challenges with focus
          and adaptability, driving successful outcomes in every project.
        </p>
      </div>
      <div className="sm:basis-1/2 px-4 max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-serif mb-4 mt-6 md:mt-0">
          Skills
        </h2>
        <div className="flex flex-row flex-wrap">
          {SKILLS.map((name) => (
            <Tech key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
