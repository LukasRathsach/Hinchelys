// Hero — the page-opening unit. See web/patterns.md §2.
//
//   <Hero
//     eyebrow="IVÆRKSÆTTERI · FORFATTER · FOREDRAG"
//     headline={<>Vi er iværksættere fra Sønderjylland. <em>Ikke et konsulenthus.</em></>}
//     supporting="Tobias og Julie Silverstein Hinchely. Tre virksomheder, en handfuld bestyrelser, og et brev nogle gange om måneden."
//     primaryCta={{ label: 'BOOK FOREDRAG', href: '/foredrag' }}
//     ghostCta={{ label: 'SE VORES VIRKSOMHEDER', href: '/virksomheder' }}
//     image="/assets/portrait.jpg"
//   />

import Eyebrow from './Eyebrow.jsx';
import Button from './Button.jsx';

export default function Hero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  ghostCta,
  image,
  imageAlt = '',
}) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        gap: 'clamp(32px, 5vw, 80px)',
        alignItems: 'center',
        padding: 'clamp(160px, 18vw, 240px) var(--gutter) clamp(96px, 12vw, 160px)',
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1
          className="h-display"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 'var(--weight-light)',
            fontSize: 'var(--fs-display)',
            lineHeight: 0.95,
            letterSpacing: 'var(--tracking-normal)',
            margin: 0,
            color: 'var(--jet-black)',
          }}
        >
          {headline}
        </h1>
        {supporting && (
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-light)',
              fontSize: 'var(--fs-body-lg)',
              lineHeight: 'var(--lh-body)',
              color: 'var(--fg-muted)',
              maxWidth: '480px',
              margin: 0,
            }}
          >
            {supporting}
          </p>
        )}
        {(primaryCta || ghostCta) && (
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            {primaryCta && (
              <Button as="a" href={primaryCta.href} variant="primary" arrow>
                {primaryCta.label}
              </Button>
            )}
            {ghostCta && (
              <Button as="a" href={ghostCta.href} variant="ghost">
                {ghostCta.label}
              </Button>
            )}
          </div>
        )}
      </div>

      <div
        style={{
          width: '100%',
          aspectRatio: '4/5',
          background: image ? `url("${image}") center/cover no-repeat` : 'var(--concrete)',
          position: 'relative',
        }}
        role="img"
        aria-label={imageAlt}
      >
        {!image && (
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: 'var(--tracking-cta)',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
            }}
          >
            Flash portrait — Tobias &amp; Julie
          </div>
        )}
      </div>
    </section>
  );
}
