import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import StatStrip from '../components/StatStrip.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CompanyCard from '../components/CompanyCard.jsx';
import QuoteBand from '../components/QuoteBand.jsx';
import EmailSignup from '../components/EmailSignup.jsx';
import Footer from '../components/Footer.jsx';

const COMPANIES = [
  {
    tag: 'Vin · 250.000+ kunder',
    name: 'Den Sidste Flaske',
    description: 'Danmarks hurtigst voksende online vinhandel. Tre lande, snart 50 ansatte — bygget fra Sønderjylland.',
    href: 'https://dsfwine.dk',
  },
  {
    tag: 'Restaurant · Sønderborg',
    name: 'Bistro Neuf',
    description: 'Sønderborgs nærmeste på Frankrig. Køkken, vin og atmosfære — uden filter.',
    href: '#',
  },
  {
    tag: 'Bureau · Strategi & marketing',
    name: 'Det Sidste Bureau',
    description: 'Marketingbureauet der ikke laver kedsommelig marketing. Fordi det aldrig virker.',
    href: '#',
  },
];

const STATS = [
  { value: '250.000+', label: 'Kunder' },
  { value: '3',        label: 'Lande' },
  { value: '~50',      label: 'Ansatte' },
  { value: '12',       label: 'År i drift' },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          eyebrow="Iværksætteri · Forfatter · Foredrag"
          headline={<>Vi er iværksættere fra Sønderjylland. <em>Ikke et konsulenthus.</em></>}
          supporting="Tobias og Julie Silverstein Hinchely. Tre virksomheder, en handfuld bestyrelser, og et brev nogle gange om måneden."
          primaryCta={{ label: 'Book foredrag', href: '/foredrag' }}
          ghostCta={{ label: 'Se vores virksomheder', href: '/virksomheder' }}
        />

        <StatStrip items={STATS} />

        <section
          style={{
            maxWidth: 'var(--maxw)',
            margin: '0 auto',
            padding: 'clamp(64px, 10vw, 128px) var(--gutter)',
          }}
        >
          <SectionHeader
            number="01"
            eyebrow="Virksomheder"
            heading="Tre virksomheder. En adresse. Samme nysgerrighed."
            kicker="Fra online vinhandel til restaurant til marketingbureau — bygget i Sønderjylland."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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

        <QuoteBand
          quote={<>Dygtige hænder er ikke plan B. <em>De er fundamentet.</em></>}
          attribution="Tobias Hinchely"
          star
        />

        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
