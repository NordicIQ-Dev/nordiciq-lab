export default function App() {
  return (
    <>
      <section className="hero">
        <h1>
          AI Andorra
          <br />
          <span className="hero-accent">NordicIQs egen AI</span>
        </h1>
        <p>driftet på egen maskinvare</p>
        <div className="hero-buttons">
          <a href="#kontakt" className="btn btn-primary">Ta kontakt</a>
          <a href="#slik-fungerer-det" className="btn btn-secondary">Slik fungerer det</a>
        </div>
      </section>

      <section className="content">
        <span className="section-label">PLATTFORM</span>
        <h2>Hva er AI Andorra?</h2>
        <p>
          AI Andorra er en AI-plattform som NordicIQ drifter selv. Data som
          behandles, blir på vår egen maskinvare og sendes ikke til eksterne
          AI-tjenester.
        </p>
      </section>

      <section className="content">
        <span className="section-label">FORDELER</span>
        <h2>Hvorfor egen AI</h2>
        <div className="cards">
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Dataene blir hos oss</h3>
            <p>Avtaler, kundedata og intern informasjon sendes ikke til eksterne AI-tjenester.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Forutsigbare kostnader</h3>
            <p>Egen maskinvare i stedet for stadig flere abonnementer.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
            </div>
            <h3>Kompetanse vi kan selge</h3>
            <p>Når vi drifter AI selv, kan vi også tilby det til kunder.</p>
          </div>
        </div>
      </section>

      <section className="content maskinvare-section" id="maskinvare">
        <span className="section-label">MASKINVARE</span>
        <h2>Ekte maskinvare</h2>
        <div className="maskinvare-grid">
          <div className="maskinvare-left">
            <p>
              Vi leier ikke tilgang til andres AI. Vi eier maskinvaren selv,
              plassert i Andorra, og har full kontroll over ytelse, kostnader
              og personvern.
            </p>
            <svg
              className="server-illustration"
              viewBox="0 0 200 160"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="10" y="5" width="180" height="150" rx="6" fill="#111827" stroke="#1F2937" strokeWidth="2" />
              <rect x="22" y="15" width="156" height="28" rx="3" fill="#1F2937" />
              <circle cx="36" cy="29" r="3" fill="#38BDF8" />
              <circle cx="50" cy="29" r="2.5" fill="#38BDF8" opacity="0.5" />
              <line x1="62" y1="29" x2="168" y2="29" stroke="#1F2937" strokeWidth="1" />
              <rect x="22" y="50" width="156" height="28" rx="3" fill="#1F2937" />
              <circle cx="36" cy="64" r="3" fill="#38BDF8" />
              <circle cx="50" cy="64" r="2.5" fill="#38BDF8" opacity="0.5" />
              <line x1="62" y1="64" x2="168" y2="64" stroke="#1F2937" strokeWidth="1" />
              <rect x="22" y="85" width="156" height="28" rx="3" fill="#1F2937" />
              <circle cx="36" cy="99" r="3" fill="#38BDF8" />
              <circle cx="50" cy="99" r="2.5" fill="#38BDF8" opacity="0.5" />
              <line x1="62" y1="99" x2="168" y2="99" stroke="#1F2937" strokeWidth="1" />
              <rect x="22" y="120" width="156" height="28" rx="3" fill="#1F2937" />
              <circle cx="36" cy="134" r="3" fill="#38BDF8" />
              <circle cx="50" cy="134" r="2.5" fill="#38BDF8" opacity="0.5" />
              <line x1="62" y1="134" x2="168" y2="134" stroke="#1F2937" strokeWidth="1" />
            </svg>
          </div>
          <div className="maskinvare-right">
            <h3>Spesifikasjoner</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <svg className="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" rx="1" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
                <span className="spec-label">GPU</span>
                <span className="spec-value">2× NVIDIA RTX PRO 6000</span>
              </div>
              <div className="spec-item">
                <svg className="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="1" />
                  <line x1="6" y1="10" x2="6" y2="14" />
                  <line x1="10" y1="10" x2="10" y2="14" />
                  <line x1="14" y1="10" x2="14" y2="14" />
                  <line x1="18" y1="10" x2="18" y2="14" />
                </svg>
                <span className="spec-label">GPU-minne</span>
                <span className="spec-value">96 GB per kort</span>
              </div>
              <div className="spec-item">
                <svg className="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <circle cx="8" cy="10" r="1" fill="#38BDF8" />
                  <circle cx="12" cy="10" r="1" fill="#38BDF8" />
                  <circle cx="16" cy="10" r="1" fill="#38BDF8" />
                </svg>
                <span className="spec-label">Språkmodell</span>
                <span className="spec-value">Qwen 3.8, 27 milliarder parametere</span>
              </div>
              <div className="spec-item">
                <svg className="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="spec-label">Plassering</span>
                <span className="spec-value">Andorra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <span className="section-label">BRUK</span>
        <h2>Hva vi bruker den til</h2>
        <div className="bruk-grid">
          <div className="bruk-card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <p>Analyse av dokumenter og avtaler</p>
          </div>
          <div className="bruk-card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <p>Utregninger og rapporter</p>
          </div>
          <div className="bruk-card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <p>Programmering og feilretting</p>
          </div>
          <div className="bruk-card">
            <div className="icon-box">
              <svg
                className="card-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <polyline points="10 13 8 15 10 17" />
                <polyline points="14 13 16 15 14 17" />
              </svg>
            </div>
            <p>Arbeid direkte i kodelagre på GitHub</p>
          </div>
        </div>
      </section>

      <section className="content" id="slik-fungerer-det">
        <span className="section-label">ARBEIDSFLYT</span>
        <h2>Slik fungerer det</h2>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Bestilling</h3>
            <p>Oppgaven beskrives for AI Andorra</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Kode</h3>
            <p>AI Andorra lager endringen i GitHub</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Kontroll</h3>
            <p>Koden bygges og testes automatisk</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Godkjenning</h3>
            <p>Et menneske godkjenner</p>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <h3>Publisering</h3>
            <p>Siden oppdateres automatisk</p>
          </div>
        </div>
      </section>

      <div className="banner-andorra">
        <svg
          className="banner-pattern"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          <defs>
            <pattern id="diagonal" patternUnits="userSpaceOnUse" width="24" height="24" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="24" stroke="white" strokeWidth="0.5" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
        <p className="banner-text">Drevet fra Andorra. Bygget for Norden.</p>
      </div>

      <section className="content" id="kontakt">
        <span className="section-label">KONTAKT</span>
        <h2>Kontakt</h2>
        <p>Vil du vite mer? Ta kontakt på post@nordiciq.io.</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} NordicIQ</p>
      </footer>
    </>
  );
}
