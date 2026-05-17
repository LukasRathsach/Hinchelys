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
      className="hero-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        gap: 'clamp(32px, 5vw, 80px)',
        alignItems: 'center',
        padding: 'clamp(140px, 18vw, 220px) var(--gutter) clamp(96px, 12vw, 160px)',
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1
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
        className="hero-image"
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
