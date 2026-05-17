export default function PressItem({ outlet, date, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '24px 0',
        textDecoration: 'none',
        color: 'var(--jet-black)',
        border: 'none',
        borderBottom: '1px solid var(--border-soft)',
        transition: 'opacity var(--dur-base) var(--ease-out)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
    >
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 'var(--weight-light)',
          fontSize: '22px',
          lineHeight: 1.1,
        }}
      >
        {outlet}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
        }}
      >
        {date}
      </div>
    </a>
  );
}
