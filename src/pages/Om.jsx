import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import QuoteBand from '../components/QuoteBand.jsx';
import Footer from '../components/Footer.jsx';

export default function Om() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '72px' }}>
        <section
          style={{
            maxWidth: 'var(--maxw)',
            margin: '0 auto',
            padding: 'clamp(80px, 12vw, 160px) var(--gutter) clamp(64px, 8vw, 96px)',
          }}
        >
          <SectionHeader
            eyebrow="Om os"
            heading={<>En dreng fra Aabenraa. <em>En pige der ikke vidste bedre.</em></>}
          />
          <div
            className="two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(48px, 6vw, 96px)',
              marginTop: '64px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  fontWeight: 'var(--weight-light)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--fg-muted)',
                  margin: 0,
                }}
              >
                Tobias Hinchely startede Den Sidste Flaske i 2012 fra Aabenraa. Ingen ekstern kapital. Ingen forretningsplan der overlevede kontakten med virkeligheden. Bare en knude i maven og en idé om at sælge vin online i en tid, hvor ingen troede det ville virke.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  fontWeight: 'var(--weight-light)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--fg-muted)',
                  margin: 0,
                }}
              >
                I dag er DSF Danmarks hurtigst voksende online vinhandel. 250.000+ kunder, tre lande, snart 50 ansatte. Bistro Neuf åbnede i Sønderborg. Det Sidste Bureau startede som et sideprojekt og er endt som en protest mod kedsommelig marketing.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  fontWeight: 'var(--weight-light)',
                  lineHeight: 'var(--lh-body)',
                  color: 'var(--fg-muted)',
                  margin: 0,
                }}
              >
                Julie Silverstein Hinchely driver sine egne projekter. Hun er co-founder, partner og den person der spørger de spørgsmål Tobias ikke tænker på. De arbejder og bor i Sønderjylland.
              </p>
            </div>
            <div
              style={{
                background: 'var(--concrete)',
                aspectRatio: '3/4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: 'var(--tracking-cta)',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
              }}
            >
              Portræt — Tobias &amp; Julie
            </div>
          </div>
        </section>

        <QuoteBand
          quote={<>Staten var ingen steder, da jeg lå søvnløs og ikke vidste om jeg kunne betale løn. <em>Iværksætteri er ikke et valg. Det er en tilstand.</em></>}
          attribution="Tobias Hinchely"
          star
        />

        <section
          style={{
            maxWidth: 'var(--maxw)',
            margin: '0 auto',
            padding: 'clamp(64px, 8vw, 96px) var(--gutter)',
          }}
        >
          <SectionHeader
            eyebrow="Bestyrelsesposter"
            heading="Udefra og ind."
            kicker="Vi sidder i bestyrelser, fordi vi har prøvet det selv — ikke fordi vi har læst om det."
          />
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            {[
              'Bestyrelsespost 1 — til opdatering',
              'Bestyrelsespost 2 — til opdatering',
              'Bestyrelsespost 3 — til opdatering',
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid var(--border-soft)',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: 'var(--fg-muted)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
