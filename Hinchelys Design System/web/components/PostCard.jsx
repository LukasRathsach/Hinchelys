// PostCard — single row in the content hub. See web/patterns.md §7.
//
//   <PostCard
//     date="12. MARTS 2026"
//     title="Den knude i maven der aldrig forsvinder."
//     excerpt="Staten var ingen steder, da jeg lå søvnløs..."
//     slug="knuden-i-maven"
//   />

export default function PostCard({ date, title, excerpt, slug, tags }) {
  return (
    <article
      style={{
        padding: '48px 0',
        borderBottom: '1px solid var(--border-soft)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
          color: 'var(--fg-muted)',
        }}
      >
        <span>{date}</span>
        {tags?.map((t) => (
          <span key={t} style={{ paddingLeft: '24px', borderLeft: '1px solid var(--border-soft)' }}>
            {t}
          </span>
        ))}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 'var(--weight-light)',
          fontSize: 'clamp(28px, 3vw, 42px)',
          lineHeight: 1.1,
          margin: 0,
          maxWidth: '880px',
        }}
      >
        <a href={`/content/${slug}`} style={{ color: 'inherit', borderBottom: 'none' }}>
          {title}
        </a>
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '17px',
          fontWeight: 'var(--weight-light)',
          lineHeight: 'var(--lh-body)',
          color: 'var(--fg-muted)',
          margin: 0,
          maxWidth: '720px',
        }}
      >
        {excerpt}
      </p>

      <a
        href={`/content/${slug}`}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
          color: 'var(--jet-black)',
          textDecoration: 'none',
          alignSelf: 'flex-start',
          borderBottom: 'none',
        }}
      >
        Læs hele indlægget →
      </a>
    </article>
  );
}
