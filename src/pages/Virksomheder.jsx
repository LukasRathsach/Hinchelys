import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CompanyCard from '../components/CompanyCard.jsx';
import StatStrip from '../components/StatStrip.jsx';
import Footer from '../components/Footer.jsx';

const COMPANIES = [
  {
    tag: 'Vin · 250.000+ kunder · Online',
    name: 'Den Sidste Flaske',
    description: 'Danmarks hurtigst voksende online vinhandel. Startet i 2012 fra Aabenraa. I dag tre lande, snart 50 ansatte og 250.000+ kunder. Vin, der giver mening — til en pris der gør det muligt.',
    href: 'https://dsfwine.dk',
  },
  {
    tag: 'Restaurant · Sønderborg · Mad & vin',
    name: 'Bistro Neuf',
    description: 'Sønderborgs nærmeste på Frankrig. Et køkken, der tager vinen alvorligt og maden endnu mere. Ingen undskyldninger — bare en god aften.',
    href: '#',
  },
  {
    tag: 'Bureau · Strategi & marketing',
    name: 'Det Sidste Bureau',
    description: 'Marketingbureauet der startede som en protest. Boring marketing? It never works. Vi hjælper virksomheder med at kommunikere som om de mener det.',
    href: '#',
  },
];

const STATS = [
  { value: '250.000+', label: 'Kunder' },
  { value: '3',        label: 'Lande' },
  { value: '~50',      label: 'Ansatte' },
  { value: '2012',     label: 'Grundlagt' },
];

export default function Virksomheder() {
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
            number="01"
            eyebrow="Virksomheder"
            heading="Tre virksomheder. En adresse. Samme nysgerrighed."
            kicker="Alle tre er bygget fra bunden i Sønderjylland. Ingen ekstern kapital. Ingen investorer der bestemmer retningen."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1px',
              marginTop: '64px',
              border: '1px solid var(--jet-black)',
            }}
          >
            {COMPANIES.map((c) => (
              <CompanyCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        <StatStrip items={STATS} accent />
      </main>
      <Footer />
    </>
  );
}
