import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import PressItem from '../components/PressItem.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';

const PRESS = [
  { outlet: 'Berlingske Business', date: '2026', href: '#' },
  { outlet: 'DR Nyheder',          date: '2025', href: '#' },
  { outlet: 'Børsen',              date: '2025', href: '#' },
  { outlet: 'TV Syd',              date: '2025', href: '#' },
  { outlet: 'Finans.dk',           date: '2024', href: '#' },
  { outlet: 'Jyllands-Posten',     date: '2024', href: '#' },
  { outlet: 'Iværksætter Magasinet', date: '2024', href: '#' },
  { outlet: 'Erhverv Syd',         date: '2023', href: '#' },
];

export default function Medie() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '72px' }}>
        <section
          style={{
            maxWidth: 'var(--maxw)',
            margin: '0 auto',
            padding: 'clamp(80px, 10vw, 128px) var(--gutter) clamp(64px, 8vw, 96px)',
          }}
        >
          <SectionHeader
            number="03"
            eyebrow="Medie & presse"
            heading="De har skrevet om os."
            kicker="Presseomtale, debatindlæg og medieoptrædener. Kontakt os for pressemateriale."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0 48px',
              marginTop: '64px',
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            {PRESS.map((item) => (
              <PressItem key={item.outlet} {...item} />
            ))}
          </div>

          <div style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--border-soft)' }}>
            <Button as="a" href="#" variant="ghost" arrow>
              Hent pressekit
            </Button>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 'var(--weight-light)',
                color: 'var(--fg-muted)',
                marginTop: '16px',
              }}
            >
              Inkluderer: biografi, hi-res portrætter, logoer og pressetekst.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
