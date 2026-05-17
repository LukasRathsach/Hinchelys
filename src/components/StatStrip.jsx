export default function StatStrip({ items, accent = false }) {
  return (
    <section
      className="stat-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        background: accent ? 'var(--aureolin)' : 'transparent',
        borderTop: '1px solid var(--jet-black)',
        borderBottom: '1px solid var(--jet-black)',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: '64px 32px',
            borderLeft: i === 0 ? 'none' : '1px solid var(--jet-black)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 'var(--weight-light)',
              fontSize: '72px',
              lineHeight: 1,
              color: 'var(--jet-black)',
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-cta)',
              textTransform: 'uppercase',
              color: accent ? 'var(--jet-black)' : 'var(--fg-muted)',
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}
