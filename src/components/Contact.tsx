import { Form } from "./Form"

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col  bg-steel  w-full px-9 py-4 items-center "
    >
      <h2 className="text-3xl font-bold text-charcoal text-center py-9 font-serif">
        Contact me
      </h2>

      <Form />
    </section>
  )
}
