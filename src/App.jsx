import './App.css'

const featuredTiles = [
  {
    title: 'Aviral demand for matcha',
    text: 'Cha Cha Matcha built an instantly recognizable identity around premium tea, playful energy, and a format designed to travel.',
  },
  {
    title: 'Designed for modern retail',
    text: 'The concept is clean, visual, and efficient, with a footprint and workflow that can flex for multiple markets.',
  },
]

const drinks = [
  {
    title: 'Ceremonial Matcha',
    subtitle: 'Core hero beverage',
    theme: 'matcha',
  },
  {
    title: 'Strawberry Cloud',
    subtitle: 'Signature layered drink',
    theme: 'strawberry',
  },
  {
    title: 'Soft Serve Float',
    subtitle: 'Dessert led traffic driver',
    theme: 'cream',
  },
]

const franchiseCards = [
  {
    number: '01',
    title: 'Brand heat',
    text: 'A visually distinct concept that earns attention quickly across packaging, interiors, and social channels.',
  },
  {
    number: '02',
    title: 'Simple menu',
    text: 'Focused beverage and dessert offerings that feel premium without becoming operationally messy.',
  },
  {
    number: '03',
    title: 'Expansion ready',
    text: 'A format built to scale into new neighborhoods, mall footprints, and destination retail corridors.',
  },
]

const stats = [
  ['Category', 'Premium matcha and tea retail'],
  ['Formats', 'Inline, kiosk, flagship'],
  ['Design language', 'Playful, polished, editorial'],
  ['Audience', 'Trend aware urban consumers'],
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-badge">Cha Cha</div>
          <span className="brand-label">Franchise</span>
        </div>
        <nav className="nav-links">
          <a href="#story">Story</a>
          <a href="#drinks">Drinks</a>
          <a href="#model">Model</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill-button dark" href="#contact">Inquire now</a>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Cha Cha Matcha franchise</p>
              <h1>A premium matcha concept with cult brand energy.</h1>
              <p className="hero-text">
                Built for founders and operators who want a visually iconic food and beverage brand with real presence, clear positioning, and expansion potential.
              </p>
              <div className="hero-actions">
                <a className="pill-button dark" href="#contact">Get franchise deck</a>
                <a className="pill-button soft" href="#model">View opportunity</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card hero-card-back"></div>
              <div className="hero-card hero-card-front">
                <div className="hero-image-frame">
                  <div className="hero-blob hero-blob-one"></div>
                  <div className="hero-blob hero-blob-two"></div>
                  <div className="cup-stack large matcha">
                    <div className="foam"></div>
                    <div className="straw"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-grid" id="story">
          <article className="story-card story-main">
            <div className="story-main-copy">
              <p className="eyebrow">Brand premise</p>
              <h2>Fresh, social, and unmistakably green.</h2>
              <p>
                The page leans into a fashion aware, editorial look. Big serif headlines, soft cream space, rounded containers, and product imagery do most of the work.
              </p>
            </div>
            <div className="story-main-visual">
              <div className="mini-scene pink-scene">
                <div className="cup-stack strawberry small"></div>
              </div>
            </div>
          </article>

          <div className="story-side-stack">
            {featuredTiles.map((tile) => (
              <article className="story-card story-side" key={tile.title}>
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="drinks-section" id="drinks">
          <div className="section-heading center">
            <p className="eyebrow">Signature drinks</p>
            <h2>Product moments designed to feel shareable and premium.</h2>
          </div>
          <div className="drinks-grid">
            {drinks.map((drink) => (
              <article className={`drink-tile ${drink.theme}`} key={drink.title}>
                <div className={`drink-scene ${drink.theme}`}>
                  <div className={`cup-stack ${drink.theme}`}></div>
                </div>
                <div className="drink-copy">
                  <p>{drink.subtitle}</p>
                  <h3>{drink.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="model-section" id="model">
          <div className="model-grid">
            <div className="model-copy-card">
              <p className="eyebrow">Why it works</p>
              <h2>An aesthetic brand with a simple operating story.</h2>
              <p>
                The design language suggests a franchise pitch built around desirability first, then operational clarity. It feels less like a restaurant deck and more like a premium consumer brand launch.
              </p>
              <div className="stat-list">
                {stats.map(([label, value]) => (
                  <div className="stat-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="franchise-stack">
              {franchiseCards.map((card) => (
                <article className="franchise-card" key={card.number}>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-panel" id="contact">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Request the franchise package and review the opportunity in detail.</h2>
          </div>
          <a className="pill-button dark large" href="mailto:franchise@chachamatcha.com">Request materials</a>
        </section>
      </main>
    </div>
  )
}

export default App
