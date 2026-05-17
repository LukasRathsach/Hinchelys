import React from 'react';

export default function CompanyCard({ tag, name, description, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '32px',
        border: '1px solid var(--jet-black)',
        background: hover ? 'var(--jet-black)' : 'transparent',
        color: hover ? 'var(--alabaster)' : 'var(--jet-black)',
        textDecoration: 'none',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
        minHeight: '320px',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
        }}
      >
        {tag}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 'var(--weight-light)',
            fontSize: '36px',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 'var(--weight-light)',
            lineHeight: 'var(--lh-body)',
            margin: 0,
            color: hover ? 'var(--alabaster)' : 'var(--fg-muted)',
            transition: 'color var(--dur-base) var(--ease-out)',
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        Besøg site <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}
