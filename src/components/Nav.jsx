import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

const LINKS = [
  { label: 'OM OS',        href: '/om' },
  { label: 'VIRKSOMHEDER', href: '/virksomheder' },
  { label: 'FOREDRAG',     href: '/foredrag' },
  { label: 'MEDIE',        href: '/medie' },
  { label: 'KONTAKT',      href: '/kontakt' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const showBg = scrolled || pathname !== '/';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 var(--gutter)',
          background: showBg ? 'rgba(243,243,243,0.92)' : 'transparent',
          backdropFilter: showBg ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: showBg ? 'blur(12px)' : 'none',
          borderBottom: showBg ? '1px solid var(--border-soft)' : 'none',
          transition: 'background var(--dur-base) var(--ease-out)',
          zIndex: 100,
        }}
      >
        <Logo type="logotype" color="black" height={22} />

        <ul className="nav-links" style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-cta)',
                  textTransform: 'uppercase',
                  color: 'var(--jet-black)',
                  textDecoration: 'none',
                  border: 'none',
                  borderBottom: pathname === href ? '1px solid currentColor' : 'none',
                  paddingBottom: '4px',
                  transition: 'opacity var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Åbn menu"
        >
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--jet-black)' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--jet-black)' }} />
          <span style={{ display: 'block', width: '16px', height: '1px', background: 'var(--jet-black)' }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--jet-black)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--gutter)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
            <Logo type="logotype" color="white" height={22} />
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--alabaster)',
                fontFamily: 'var(--font-sans)',
                fontSize: '24px',
                lineHeight: 1,
                padding: '8px',
              }}
              aria-label="Luk menu"
            >
              ×
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '48px' }}>
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 'var(--weight-light)',
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  color: 'var(--alabaster)',
                  textDecoration: 'none',
                  border: 'none',
                  lineHeight: 1.2,
                  padding: '12px 0',
                  borderBottom: '1px solid #ffffff14',
                  transition: 'opacity var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.55)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
