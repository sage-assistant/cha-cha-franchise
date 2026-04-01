import './App.css'

const menuItems = [
  {
    title: 'Ceremonial Matcha Latte',
    text: 'Stone ground Japanese matcha, silky milk, and a clean finish that keeps people coming back.',
  },
  {
    title: 'Strawberry Matcha Cloud',
    text: 'A layered signature drink with fruit, cream, and vibrant color built for shareability.',
  },
  {
    title: 'Yuzu Sparkling Tea',
    text: 'Bright citrus and tea over sparkling water for a refreshing all day option.',
  },
]

const reasons = [
  'Premium matcha drinks with high visual appeal',
  'Compact operational model with strong throughput',
  'Flexible kiosk, inline, and flagship footprints',
  'Social first brand language that earns attention fast',
]

const steps = [
  {
    number: '01',
    title: 'Discover the concept',
    text: 'Review the model, unit economics, and launch roadmap with the franchise team.',
  },
  {
    number: '02',
    title: 'Secure your territory',
    text: 'Choose the market, footprint, and format that best matches your growth plan.',
  },
  {
    number: '03',
    title: 'Launch with support',
    text: 'Open with training, systems, marketing guidance, and an operational playbook.',
  },
]

const stats = [
  ['Designed for', 'High traffic retail corridors'],
  ['Format options', 'Kiosk, inline, flagship'],
  ['Brand focus', 'Premium matcha and tea based drinks'],
  ['Ideal operator', 'Hands on owner or multi unit group'],
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark">Cha</div>
          <div className="brand-copy">
            <span className="brand-name">Cha Cha Matcha</span>
            <span className="brand-sub">Franchise opportunities</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#story">Story</a>
          <a href="#menu">Menu</a>
          <a href="#franchise">Franchise</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill-button dark" href="#contact">Request info</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A franchise brand with real visual gravity</p>
            <h1>Bring a premium matcha concept to your market.</h1>
            <p className="hero-text">
              Built around unmistakable branding, high margin beverage moments, and a store experience that
              feels instantly current.
            </p>
            <div className="hero-actions">
              <a className="pill-button dark" href="#contact">Book a franchise call</a>
              <a className="pill-button light" href="#franchise">View the model</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="drink-card main-drink">
              <div className="cup cup-large">
                <div className="liquid liquid-matcha"></div>
                <div className="foam"></div>
                <div className="straw"></div>
              </div>
            </div>
            <div className="floating-card top-note">
              <span>Fresh design</span>
              <strong>Built for social discovery</strong>
            </div>
            <div className="floating-card bottom-note">
              <span>Flexible footprint</span>
              <strong>From compact kiosks to destination stores</strong>
            </div>
          </div>
        </section>

        <section className="split-section blush" id="story">
          <div className="image-panel collage">
            <div className="mini-drink strawberry"></div>
            <div className="mini-drink matcha"></div>
            <div className="mini-drink cream"></div>
          </div>
          <div className="text-panel">
            <p className="eyebrow">Why this brand travels well</p>
            <h2>Distinctive drinks, recognizable aesthetics, repeatable operations.</h2>
            <p>
              The strongest food and beverage franchises are more than menus. They are systems wrapped in a
              brand people remember. This concept combines premium matcha positioning with a visual identity
              that reads instantly across storefronts, packaging, and digital channels.
            </p>
            <ul className="reason-list">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading centered">
            <p className="eyebrow">Signature lineup</p>
            <h2>Drinks that look premium before the first sip.</h2>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <article className="menu-card" key={item.title}>
                <div className={`menu-image variant-${index + 1}`}>
                  <div className="cup">
                    <div className={`liquid ${index === 0 ? 'liquid-matcha' : index === 1 ? 'liquid-strawberry' : 'liquid-yuzu'}`}></div>
                    <div className="foam"></div>
                  </div>
                </div>
                <div className="menu-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="franchise-section" id="franchise">
          <div className="section-heading">
            <p className="eyebrow">Franchise pathway</p>
            <h2>A concept that balances brand heat with operational clarity.</h2>
          </div>
          <div className="franchise-grid">
            <div className="process-cards">
              {steps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="info-card">
              <p className="eyebrow dark-text">At a glance</p>
              <div className="stat-list">
                {stats.map(([label, value]) => (
                  <div className="stat-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" id="contact">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>See the full opportunity, then decide if it deserves a market near you.</h2>
          </div>
          <a className="pill-button dark large" href="mailto:franchise@chachamatcha.com">Request franchise materials</a>
        </section>
      </main>
    </div>
  )
}

export default App
