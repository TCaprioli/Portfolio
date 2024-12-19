import headShot from "../assets/headshot.png"

export const Landing = () => {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row bg-charcoal h-screen sm:max-h-[50vh] w-full items-center justify-center px-9"
    >
      <div className="flex flex-col sm:basis-1/2 justify-center sm:items-center sm:justify-normal">
        <div className="flex flex-col items-center sm:items-start">
          <p className=" text-3xl sm:text-4xl font-bold text-steel font-serif mb-2">
            Tyler Caprioli
          </p>
          <h1 className="text-4xl md:text-6xl text-cherry font-serif font-bold mb-2 ">
            Web Developer
          </h1>
          <button className="border border-cherry text-steel max-w-64 hover:border-cherry hover:bg-steel hover:text-cherry">
            Download Resume
          </button>
        </div>
      </div>
      <div className=" flex justify-center mt-4  sm:basis-1/2  w-full items-start">
        <div className="relative bg-steel rounded-3xl w-72 h-96 items-start overflow-hidden">
          <img
            src={headShot}
            alt={"portrait"}
            className="min-h-96 w-80 object-cover absolute -right-11"
          />
        </div>
      </div>
    </section>
  )
}
