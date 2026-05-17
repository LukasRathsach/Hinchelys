import Logo from './Logo.jsx';

const NAV = [
  { label: 'Om os',        href: '/om' },
  { label: 'Virksomheder', href: '/virksomheder' },
  { label: 'Foredrag',     href: '/foredrag' },
  { label: 'Medie',        href: '/medie' },
  { label: 'Content',      href: '/content' },
  { label: 'Kontakt',      href: '/kontakt' },
];

const CONTACT = [
  { label: 'kontakt@hinchelys.dk', href: 'mailto:kontakt@hinchelys.dk' },
  { label: 'LinkedIn — Tobias',    href: 'https://www.linkedin.com/in/tobiassh' },
];

const colHeading = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  fontWeight: 'var(--weight-medium)',
  letterSpacing: 'var(--tracking-cta)',
  textTransform: 'uppercase',
  color: 'var(--concrete)',
  marginBottom: '20px',
};

const linkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  fontWeight: 'var(--weight-light)',
  color: 'var(--alabaster)',
  textDecoration: 'none',
  border: 'none',
  display: 'block',
  padding: '4px 0',
  transition: 'opacity var(--dur-base) var(--ease-out)',
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--jet-black)',
        color: 'var(--alabaster)',
        padding: '96px var(--gutter) 48px',
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(32px, 4vw, 64px)',
        }}
      >
        <div>
          <Logo type="logotype" color="white" height={28} href={null} />
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '17px',
              fontWeight: 'var(--weight-light)',
              color: 'var(--concrete)',
              marginTop: '24px',
              lineHeight: 1.4,
            }}
          >
            Iværksættere fra Sønderjylland.
          </p>
          <address
            style={{
              fontStyle: 'normal',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: 'var(--concrete)',
              marginTop: '24px',
              lineHeight: 1.6,
            }}
          >
            Sønderborg<br />Danmark
          </address>
        </div>

        <div>
          <div style={colHeading}>Sektioner</div>
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <div style={colHeading}>Kontakt</div>
          {CONTACT.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <div style={colHeading}>Nyhedsbrev</div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 'var(--weight-light)',
              color: 'var(--concrete)',
              margin: '0 0 16px',
            }}
          >
            Et brev, når der er noget at sige.
          </p>
          <form
            action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <input
              type="email"
              name="email"
              placeholder="din@email.dk"
              style={{
                height: '44px',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--alabaster)',
                color: 'var(--alabaster)',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                alignSelf: 'flex-start',
                background: 'var(--alabaster)',
                color: 'var(--jet-black)',
                border: 'none',
                height: '40px',
                padding: '0 20px',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-cta)',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              Tilmeld →
            </button>
          </form>
        </div>
      </div>

      <div
        style={{
          maxWidth: 'var(--maxw)',
          margin: '64px auto 0',
          paddingTop: '32px',
          borderTop: '1px solid #ffffff14',
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-cta)',
          textTransform: 'uppercase',
          color: 'var(--concrete)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>© 2026 HINCHELYS</div>
        <div>BUILT IN SØNDERJYLLAND</div>
      </div>
    </footer>
  );
}
