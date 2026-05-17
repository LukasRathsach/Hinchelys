import React from 'react';
import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import PostCard from '../components/PostCard.jsx';
import Footer from '../components/Footer.jsx';

const TAGS = ['Alle', 'Iværksætteri', 'Politik', 'Ledelse', 'Sønderjylland'];

const POSTS = [
  {
    date: '12. MARTS 2026',
    title: 'Den knude i maven der aldrig forsvinder.',
    excerpt: 'Staten var ingen steder, da jeg lå søvnløs og ikke vidste om jeg kunne betale løn. Det er ikke en klage. Det er en observation. Iværksætteri er ikke et valg — det er en tilstand.',
    slug: 'knuden-i-maven',
    tags: ['Iværksætteri'],
  },
  {
    date: '28. FEBRUAR 2026',
    title: 'Dygtige hænder er ikke plan B.',
    excerpt: 'Vi har et problem i Danmark. Vi er begyndt at se uddannelse som et hierarki. Akademikere øverst. Håndværkere nederst. Det er forkert. Det er farligt. Og det er ved at koste os enormt.',
    slug: 'dygtige-haender',
    tags: ['Politik', 'Ledelse'],
  },
  {
    date: '14. JANUAR 2026',
    title: 'Hvad 250.000 kunder har lært mig om at lytte.',
    excerpt: 'Vi startede DSF fordi vi elskede vin. Vi voksede fordi vi begyndte at lytte til dem der køber det. Ikke til rådgivere. Ikke til bureauer. Til kunderne.',
    slug: 'hvad-kunder-laerte-mig',
    tags: ['Iværksætteri', 'Ledelse'],
  },
  {
    date: '3. DECEMBER 2025',
    title: 'Sønderjylland er ikke provinsen. Det er basen.',
    excerpt: 'Alle sagde vi skulle til København hvis vi ville vokse. Vi sagde tak og blev i Aabenraa. Det var den bedste beslutning vi nogensinde tog.',
    slug: 'sonderjylland-er-basen',
    tags: ['Sønderjylland', 'Iværksætteri'],
  },
];

export default function Content() {
  const [activeTag, setActiveTag] = React.useState('Alle');

  const filtered = activeTag === 'Alle'
    ? POSTS
    : POSTS.filter((p) => p.tags.includes(activeTag));

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
            number="04"
            eyebrow="Content"
            heading="Det vi faktisk tænker."
            kicker="LinkedIn-indlæg, debatter og observationer — gengivet her, uden algoritmen imellem."
          />

          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '48px',
            }}
          >
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-cta)',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  border: '1px solid var(--jet-black)',
                  background: activeTag === tag ? 'var(--jet-black)' : 'transparent',
                  color: activeTag === tag ? 'var(--alabaster)' : 'var(--jet-black)',
                  cursor: 'pointer',
                  borderRadius: 'var(--r-pill)',
                  transition: 'all var(--dur-base) var(--ease-out)',
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '8px' }}>
            {filtered.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
