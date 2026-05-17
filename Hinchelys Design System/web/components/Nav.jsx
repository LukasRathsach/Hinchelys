// Nav — top navigation bar. Sticky after 80px scroll, with backdrop blur.
// See web/patterns.md §1.

import React from 'react';
import Logo from './Logo.jsx';

const LINKS = [
  { label: 'OM OS',         href: '/om' },
  { label: 'VIRKSOMHEDER',  href: '/virksomheder' },
  { label: 'FOREDRAG',      href: '/foredrag' },
  { label: 'MEDIE',         href: '/medie' },
  { label: 'KONTAKT',       href: '/kontakt' },
];

export default function Nav({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: scrolled ? 'fixed' : 'absolute',
        top: 0, left: 0, right: 0,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--gutter)',
        background: scrolled ? 'rgba(243,243,243,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out)',
        zIndex: 100,
      }}
    >
      <Logo type="logotype" color="black" height={22} />
      <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
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
                borderBottom: active === href ? '1px solid currentColor' : 'none',
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
    </nav>
  );
}
