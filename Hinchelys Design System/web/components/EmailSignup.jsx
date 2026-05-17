// EmailSignup — single-row email + button capture. See web/patterns.md §10.
//
//   <EmailSignup
//     heading="Få et brev. Når der er noget at sige."
//     fineprint="Ingen spam. Afmelding med ét klik."
//   />

import React from 'react';
import Button from './Button.jsx';

export default function EmailSignup({
  heading = 'Få et brev. Når der er noget at sige.',
  fineprint = 'Ingen spam. Afmelding med ét klik.',
  onSubmit,
  inverted = false,
}) {
  const [email, setEmail] = React.useState('');
  const fg = inverted ? 'var(--alabaster)' : 'var(--jet-black)';
  const muted = inverted ? 'var(--concrete)' : 'var(--fg-muted)';

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(32px, 5vw, 80px)',
        padding: 'clamp(64px, 8vw, 96px) var(--gutter)',
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 'var(--weight-light)',
          fontSize: 'var(--fs-h3)',
          lineHeight: 'var(--lh-heading)',
          color: fg,
          margin: 0,
          maxWidth: '500px',
        }}
      >
        {heading}
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(email);
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '12px' }}>
          <input
            type="email"
            placeholder="din@email.dk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              height: '56px',
              padding: '0 4px',
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              fontWeight: 'var(--weight-light)',
              color: fg,
              background: 'transparent',
              border: 'none',
              borderBottom: `1px solid ${fg}`,
              outline: 'none',
            }}
          />
          <Button variant={inverted ? 'ghost' : 'primary'} size="lg" type="submit" arrow>
            Tilmeld
          </Button>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 'var(--weight-light)',
            letterSpacing: 'var(--tracking-cta)',
            textTransform: 'uppercase',
            color: muted,
          }}
        >
          {fineprint}
        </div>
      </form>
    </section>
  );
}
