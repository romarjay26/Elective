import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="navbar">
        <a href="#home" className="logo">
          BALUNGAO<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#attractions">Attractions</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
        </div>

        <a href="#location" className="nav-button">
          PLAN A VISIT
        </a>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <section id="home" className="hero">
        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-label">
            <span></span>
            PANGASINAN, PHILIPPINES
          </div>

          <h1>
            Discover
            <em>Balungao.</em>
          </h1>

          <p>
            A peaceful destination where natural hot springs,
            scenic hills, and countryside landscapes create
            unforgettable moments.
          </p>

          <div className="hero-actions">
            <a href="#about" className="primary-button">
              EXPLORE DESTINATION
              <span>↓</span>
            </a>

            <a href="#attractions" className="text-link">
              VIEW ATTRACTIONS →
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01</span>
          <p>WELCOME TO BALUNGAO</p>
          <div></div>
          <p>EXPLORE • RELAX • DISCOVER</p>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="about section">
        <div className="section-number">01</div>

        <div className="about-heading">
          <p className="eyebrow">ABOUT THE DESTINATION</p>

          <h2>
            Nature has
            <br />
            <em>its own rhythm.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
              alt="Natural landscape of Balungao"
            />

            <div className="image-tag">
              <span>01</span>
              BALUNGAO LANDSCAPE
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead">
              Balungao is a peaceful municipality in Pangasinan
              where natural scenery and outdoor experiences come together.
            </p>

            <p>
              Known for the Balungao Hot and Cold Spring Resort
              and the scenic Balungao Hill, the town offers visitors
              an opportunity to slow down and enjoy the beauty of
              the countryside.
            </p>

            <p>
              From relaxing in natural springs to appreciating
              panoramic landscapes, Balungao provides simple
              experiences for travelers looking for relaxation,
              adventure, and a closer connection with nature.
            </p>

            <a href="#attractions" className="arrow-link">
              DISCOVER EXPERIENCES
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          ATTRACTIONS
      ========================= */}
      <section id="attractions" className="attractions section">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 — EXPERIENCES</p>

            <h2>
              Places worth
              <br />
              <em>discovering.</em>
            </h2>
          </div>

          <p className="section-intro">
            Explore the natural attractions and peaceful
            environments that make Balungao a destination
            worth experiencing.
          </p>
        </div>

        <div className="attraction-layout">

          {/* FEATURED CARD */}
          <article className="featured-card">
            <div className="card-image">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh9ke8G0f6HTRnG4KONF7rotIrESMzQxzD30InaIaPPABBOzC-nRBAjTXnGlsffkQcY42KaznAy_hipFASLO3gRfpy1SDxTUm1ikNBPR0MbptJokjJLfJbYYfydT3hPbO4zTAFXbFYrQ-J/s1600/Balungao-Hilltop-Swimming-Pool.jpg"
                alt="Balungao Hot Spring"
              />

              <span className="card-number">01</span>

              <div className="image-overlay">
                HOT SPRING
              </div>
            </div>

            <div className="featured-content">
              <p className="card-label">RELAX & REFRESH</p>

              <h3>Balungao Hot Spring</h3>

              <p>
                Relax and enjoy a refreshing experience
                surrounded by the natural beauty of Balungao.
              </p>

              <a href="#location">
                VISIT DESTINATION <span>↗</span>
              </a>
            </div>
          </article>

          {/* SECONDARY CARDS */}
          <div className="side-cards">

            <article className="small-card">
              <div className="small-card-image">
                <img
                  src="https://cdn.mountains.com.ph/photos/2a43010f-7e2c-4115-ac7d-ca871524b0c0/ae4f46ca1ae47800dab30a030800cb36.jpg"
                  alt="Balungao Hill"
                />

                <span>02</span>
              </div>

              <div className="small-card-content">
                <p className="card-label">SCENIC VIEWS</p>

                <h3>Balungao Hill</h3>

                <p>
                  Enjoy beautiful views and appreciate
                  the landscape surrounding the area.
                </p>

                <a href="#gallery">EXPLORE →</a>
              </div>
            </article>

            <article className="small-card">
              <div className="small-card-image">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
                  alt="Nature escape"
                />

                <span>03</span>
              </div>

              <div className="small-card-content">
                <p className="card-label">SLOW DOWN</p>

                <h3>Nature Escape</h3>

                <p>
                  Spend quality time with family and friends
                  in a peaceful natural environment.
                </p>

                <a href="#gallery">DISCOVER →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================
          GALLERY
      ========================= */}
      <section id="gallery" className="gallery section">
        <div className="gallery-header">
          <div>
            <p className="eyebrow">03 — VISUAL JOURNEY</p>

            <h2>
              See the beauty
              <br />
              <em>for yourself.</em>
            </h2>
          </div>

          <p>
            A glimpse of Balungao's landscapes,
            natural surroundings, and peaceful atmosphere.
          </p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-item gallery-large">
            <img
              src="https://ilovepangasinan.com/wp-content/uploads/2023/07/2-2.jpg"
              alt="Balungao mountain landscape"
            />

            <div className="gallery-caption">
              <span>01</span>
              MOUNTAIN LANDSCAPE
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kRgZPrPbOZUSyTZXGEGiw9ypvzGjeishdA2eNk3ahYq0jNDovof9wsU&s=10"
              alt="Balungao scenery"
            />

            <div className="gallery-caption">
              <span>02</span>
              NATURAL BEAUTY
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
              alt="Forest scenery"
            />

            <div className="gallery-caption">
              <span>03</span>
              FOREST ESCAPE
            </div>
          </div>

          <div className="gallery-item gallery-wide">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Scenic landscape"
            />

            <div className="gallery-caption">
              <span>04</span>
              PEACEFUL COUNTRYSIDE
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          LOCATION
      ========================= */}
      <section id="location" className="location">
        <div className="location-bg"></div>
        <div className="location-overlay"></div>

        <div className="location-content">
          <p className="eyebrow">04 — PLAN YOUR VISIT</p>

          <h2>
            Your next
            <br />
            <em>escape awaits.</em>
          </h2>

          <p className="location-text">
            Discover the natural beauty of Balungao, Pangasinan.
            Relax in its hot springs, explore scenic landscapes,
            and experience the peaceful charm of the countryside.
          </p>

          <div className="location-details">
            <div>
              <span>DESTINATION</span>
              <strong>Balungao</strong>
            </div>

            <div>
              <span>PROVINCE</span>
              <strong>Pangasinan</strong>
            </div>

            <div>
              <span>COUNTRY</span>
              <strong>Philippines</strong>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/Balungao,+Pangasinan"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            OPEN GOOGLE MAPS
            <span>↗</span>
          </a>
        </div>

        <div className="location-word">
          BALUNGAO
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <div className="footer-main">
          <div>
            <a href="#home" className="footer-logo">
              BALUNGAO<span>.</span>
            </a>

            <p>
              Discover. Explore. Experience.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#attractions">ATTRACTIONS</a>
            <a href="#gallery">GALLERY</a>
            <a href="#location">LOCATION</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BALUNGAO TOURISM</span>

          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}