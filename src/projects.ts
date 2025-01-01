import appTrack from "./assets/apptrack.png"
import mfbTech from "./assets/mfbtech.png"
import align from "./assets/align.png"
import portfolio from "./assets/portfolio.png"
type ProjectData = {
  name: string
  image: string
  links: { live?: string; frontend?: string; backend?: string }
  description: string
  technologies: string[]
}

const appTrackData: ProjectData = {
  name: "AppTrack",
  image: appTrack,
  links: {
    live: "https://apptrack-bice.vercel.app/login",
    frontend: "https://github.com/TCaprioli/Apptrack",
    backend: "https://github.com/TCaprioli/Apptrack-go",
  },
  description:
    "Apptrack is a web-based application designed to help users manage and track their job applications. Users can easily register, log in, and manage their job applications.",
  technologies: ["React", "TypeScript", "Vite", "Tailwind", "Go", "Postgres"],
}

const mfbData: ProjectData = {
  name: "MFBTech",
  image: mfbTech,
  links: {
    live: "https://www.mfbtech.com/",
  },
  description: "Promotional website for MFB Technologies.",
  technologies: ["Next", "TypeScript", "Vite", "Sass"],
}

const alignData: ProjectData = {
  name: "Align",
  image: align,
  links: {
    live: "https://align.lawyer/",
  },
  description: "Promotional website for Align.",
  technologies: ["Next", "TypeScript", "Vite", "Sass"],
}

const portfolioData: ProjectData = {
  name: "Portfolio",
  image: portfolio,
  links: {
    frontend: "https://github.com/TCaprioli/Portfolio/tree/master",
  },
  description: "A portfolio showcasing my skills, experience, and projects.",
  technologies: ["React", "TypeScript", "Vite", "Tailwind"],
}
export const projects = [appTrackData, mfbData, alignData, portfolioData]
