import Eyebrow from './Eyebrow.jsx';

export default function SectionHeader({ number, eyebrow, heading, kicker }) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
      <Eyebrow>
        {number ? `${number} · ` : ''}{eyebrow}
      </Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 'var(--weight-light)',
          fontSize: 'var(--fs-h2)',
          lineHeight: 'var(--lh-heading)',
          letterSpacing: 'var(--tracking-normal)',
          margin: 0,
          color: 'var(--jet-black)',
        }}
      >
        {heading}
      </h2>
      {kicker && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            fontWeight: 'var(--weight-light)',
            lineHeight: 'var(--lh-body)',
            color: 'var(--fg-muted)',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          {kicker}
        </p>
      )}
    </header>
  );
}
