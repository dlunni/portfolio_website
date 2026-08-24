import { useState } from 'react'
import './Contact.css'

const CONTACT_EMAIL = 'tuoindirizzo@example.com'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Messaggio da ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <h2>Contattami</h2>
      <p className="contact-intro">
        Hai un progetto in mente o vuoi semplicemente scambiare due parole? Scrivimi.
      </p>
      <form className="contact-card" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Messaggio</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="contact-button">
          Invia messaggio
        </button>
      </form>
    </section>
  )
}

export default Contact
