// QuoteBand — full-bleed jet band with a centered serif quote.
// See web/patterns.md §8.
//
//   <QuoteBand
//     quote={<>Dygtige hænder er ikke plan B. <em>De er fundamentet.</em></>}
//     attribution="TOBIAS HINCHELY · LINKEDIN, MARTS 2026"
//     star
//   />

export default function QuoteBand({ quote, attribution, star = false }) {
  return (
    <section
      style={{
        background: 'var(--jet-black)',
        color: 'var(--alabaster)',
        padding: 'clamp(96px, 12vw, 160px) var(--gutter)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {star && (
          <div
            style={{
              fontSize: '24px',
              color: 'var(--aureolin)',
              marginBottom: '32px',
              lineHeight: 1,
            }}
          >
            ★
          </div>
        )}
        <blockquote
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 'var(--weight-light)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {quote}
        </blockquote>
        {attribution && (
          <div
            style={{
              marginTop: '32px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-cta)',
              textTransform: 'uppercase',
              color: 'var(--concrete)',
            }}
          >
            {attribution}
          </div>
        )}
      </div>
    </section>
  );
}
