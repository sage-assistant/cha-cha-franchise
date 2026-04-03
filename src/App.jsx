import './App.css'

import aboutPhoto from './assets/about-photo.png'
import expEarly from './assets/exp-early.png'
import expMission from './assets/exp-mission.png'
import expRitual from './assets/exp-ritual.png'
import footerLogo from './assets/footer-logo.png'
import heroPhoto from './assets/hero-photo.png'
import mapImage from './assets/map.png'
import partnerPhoto from './assets/partner-photo.png'

const experienceCards = [
  {
    title: 'Early to Matcha',
    body: 'We introduced premium Japanese matcha to our cafes in 2016 before it was mainstream.',
    image: expEarly,
  },
  {
    title: 'The Ritual',
    body: 'Cha Cha is built around daily ritual. We focus on details that bring guests back consistently.',
    image: expRitual,
  },
  {
    title: 'Our Mission',
    body: 'Do fewer things better, and build a trusted brand through consistency, craft, and care.',
    image: expMission,
  },
]

const stats = [
  ['10M+', 'Drinks served'],
  ['200+', 'Team members'],
  ['18+', 'Markets active'],
  ['10+', 'Years growing'],
]

const processCards = [
  {
    title: '1. Intro to Cha Cha',
    text: 'Start with a shared introduction to brand standards, operating mindset, and expectations.',
  },
  {
    title: '2. Introductory Conversation',
    text: 'We review your background, market, and goals while aligning on long-term fit.',
  },
  {
    title: '3. Location and Market Alignment',
    text: 'Our team works with partners on market selection and site strategy.',
  },
  {
    title: '4. Discovery and Planning',
    text: 'Build your launch plan with clear milestones, resources, and support structures.',
  },
  {
    title: '5. Build and Open',
    text: 'Execute a focused launch process from layout and flow to opening readiness.',
  },
]

function App() {
  return (
    <div className="page">
      <main className="site">
        <section className="hero" id="top">
          <img className="hero-photo" src={heroPhoto} alt="Cha Cha storefront" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Grow With Us</h1>
            <p>
              Cha Cha Matcha was built around a simple idea: make exceptional matcha part of
              people&apos;s everyday ritual.
            </p>
            <a className="button light" href="#apply">Apply now</a>
          </div>
        </section>

        <section className="mission-strip">
          We are growing thoughtfully and partnering with operators who care about quality,
          experience, and long term brand building.
        </section>

        <nav className="section-nav" aria-label="Section links">
          <a href="#experience">The experience</a>
          <a href="#about">About us</a>
          <a href="#how">How it works</a>
          <a href="#apply">Apply today</a>
        </nav>

        <section className="panel experience" id="experience">
          <h2>The Experience</h2>
          <div className="experience-grid">
            {experienceCards.map((card) => (
              <article className="exp-card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel about" id="about">
          <h2>About Us</h2>
          <div className="about-grid">
            <article className="about-story">
              <h3>2016 - The Beginning</h3>
              <p>
                Founded after time spent in Japan, Cha Cha Matcha opened in SoHo and introduced
                premium Japanese matcha to a wider NYC audience.
              </p>
            </article>
            <article className="about-photo-card">
              <img src={aboutPhoto} alt="Cha Cha storefront sign" />
            </article>
            <aside className="about-tags" aria-label="Feature tags">
              <span>About us</span>
              <span>How it works</span>
              <span>Apply today</span>
              <span>Apply now</span>
            </aside>
          </div>
        </section>

        <section className="panel today">
          <h2>Cha Cha Today</h2>
          <div className="stat-grid">
            {stats.map(([value, label]) => (
              <div className="stat" key={value + label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel how" id="how">
          <div className="how-head">
            <h2>How It Works</h2>
            <a className="button soft" href="#apply">Apply today</a>
          </div>
          <div className="how-grid">
            {processCards.map((card) => (
              <article className="step-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel map-wrap" id="apply">
          <article className="map-card">
            <img src={mapImage} alt="Map of Canada" />
          </article>
          <article className="region-card">
            <div className="region-tabs">
              <span className="active">US</span>
              <span>Canada</span>
              <span>International</span>
            </div>
            <dl>
              <div>
                <dt>4</dt>
                <dd>Store count</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>Provinces</dd>
              </div>
              <div>
                <dt>2</dt>
                <dd>Countries</dd>
              </div>
            </dl>
            <a className="button dark" href="#top">Apply now</a>
          </article>
        </section>

        <section className="panel partner">
          <article className="partner-copy">
            <h2>Become a Partner with Cha Cha</h2>
            <ul>
              <li>US franchise opportunities</li>
              <li>International licensing</li>
              <li>Operational stories and conversions</li>
            </ul>
            <a className="button dark" href="#top">Apply now</a>
          </article>
          <article className="partner-media">
            <img src={partnerPhoto} alt="Cha Cha interior" />
            <button className="play" aria-label="Play video" type="button" />
          </article>
        </section>

        <footer className="footer">
          <div className="footer-top">
            <span>Growing globally with trusted local partners.</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Facebook</span>
          </div>
          <img src={footerLogo} alt="Cha Cha wordmark" />
        </footer>
      </main>
    </div>
  )
}

export default App
