import { useState } from "react"

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [result, setResult] = useState<string>("")

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending...")

    const form = new FormData()
    form.append("name", formData.name)
    form.append("email", formData.email)
    form.append("message", formData.message)
    form.append("access_key", "YOUR_ACCESS_KEY_HERE")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      })

      const data = await response.json()
      if (data.success) {
        setResult("Form Submitted Successfully")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("Error:", data)
        setResult(data.message)
      }
    } catch (error) {
      console.error("Fetch error:", error)
      setResult("An error occurred while submitting the form.")
    }
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <label htmlFor="name" className="my-2">
          Name:
        </label>
        <input
          id="name"
          className="h-8 p-4 rounded-sm "
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="my-2">
          Email:
        </label>
        <input
          id="email"
          className="h-8 p-4 rounded-sm "
          type="email"
          name="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject" className="my-2">
          Subject:
        </label>
        <textarea
          id="subject"
          className="h-24 p-4 rounded-sm md:min-w-96 resize-none"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="mt-6 text-steel bg-cherry " type="submit">
          Submit Form
        </button>
      </form>
      <span aria-live="polite" className="py-6">
        {result}
      </span>
    </div>
  )
}
