import React from 'react';
import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';

export default function Kontakt() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '72px' }}>
        <section
          style={{
            maxWidth: 'var(--maxw)',
            margin: '0 auto',
            padding: 'clamp(80px, 10vw, 128px) var(--gutter) clamp(64px, 8vw, 96px)',
          }}
        >
          <SectionHeader
            number="05"
            eyebrow="Kontakt"
            heading="Skriv til os."
            kicker="Foredrag, bestyrelsesarbejde, presse eller bare et spørgsmål. Vi vender tilbage."
          />

          <div
            className="two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(48px, 6vw, 96px)',
              marginTop: '64px',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  Email
                </div>
                <a
                  href="mailto:kontakt@hinchelys.dk"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '24px',
                    color: 'var(--jet-black)',
                    border: 'none',
                  }}
                >
                  kontakt@hinchelys.dk
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/in/tobiassh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '24px',
                    color: 'var(--jet-black)',
                    border: 'none',
                  }}
                >
                  Tobias Hinchely
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  Adresse
                </div>
                <address
                  style={{
                    fontStyle: 'normal',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '17px',
                    color: 'var(--fg-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  Sønderborg<br />Danmark
                </address>
              </div>
            </div>

            <form
              action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
              method="POST"
              style={{
                background: 'var(--pure-white)',
                border: '1px solid var(--border-soft)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {[
                { name: 'name',    label: 'Navn',    type: 'text' },
                { name: 'email',   label: 'Email',   type: 'email' },
                { name: 'subject', label: 'Emne',    type: 'text' },
              ].map((field) => (
                <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor={field.name}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 'var(--weight-medium)',
                      letterSpacing: 'var(--tracking-cta)',
                      textTransform: 'uppercase',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    style={{
                      height: '48px',
                      padding: '0 0 8px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      fontWeight: 'var(--weight-light)',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid var(--border-soft)',
                      outline: 'none',
                      color: 'var(--jet-black)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--jet-black)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--border-soft)')}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-cta)',
                    textTransform: 'uppercase',
                    color: 'var(--fg-muted)',
                  }}
                >
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    padding: '12px 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    fontWeight: 'var(--weight-light)',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border-soft)',
                    outline: 'none',
                    resize: 'none',
                    color: 'var(--jet-black)',
                  }}
                />
              </div>

              <Button type="submit" variant="primary" arrow>
                Send besked
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
