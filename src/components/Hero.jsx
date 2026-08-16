import './Hero.css'
function Hero({ nome, ruolo, tagline }) {
  return (
    <section className="hero">
      <h1>Hello, {nome} here</h1>
      <h2>{ruolo}</h2>
      <p>{tagline}</p>
      <a href="#projects" className="hero-button">
        Have a look to my projects
      </a>
    </section>
  )
}

export default Hero