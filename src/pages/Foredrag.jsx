import React from 'react';
import Nav from '../components/Nav.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';

export default function Foredrag() {
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
            number="02"
            eyebrow="Foredrag"
            heading="Iværksætteri uden filter."
            kicker="Tobias har holdt foredrag for mere end 5.000 mennesker. Han taler om det, der rent faktisk sker — ikke den polerede version."
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Iværksætteri uden filter — fra nul til 250.000 kunder',
                  'Ledelse i en virksomhed der vokser hurtigere end du kan følge med',
                  'Marketing der virker — og det der ikke gør',
                  'Sønderjylland som erhvervsliv — en kærlighedserklæring',
                  'Den knude i maven der aldrig forsvinder',
                ].map((topic) => (
                  <div
                    key={topic}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '17px',
                      fontWeight: 'var(--weight-light)',
                      lineHeight: 'var(--lh-body)',
                      color: 'var(--fg-muted)',
                      paddingLeft: '24px',
                      borderLeft: '2px solid var(--jet-black)',
                    }}
                  >
                    — {topic}
                  </div>
                ))}
              </div>

              <blockquote
                style={{
                  margin: 0,
                  paddingLeft: '24px',
                  borderLeft: '2px solid var(--jet-black)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '28px',
                    fontWeight: 'var(--weight-light)',
                    lineHeight: 1.25,
                    margin: 0,
                    color: 'var(--jet-black)',
                  }}
                >
                  "En dreng fra Aabenraa der ikke vidste bedre. Det er stadig den bedste strategi jeg kender."
                </p>
                <cite
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-cta)',
                    textTransform: 'uppercase',
                    color: 'var(--fg-muted)',
                    fontStyle: 'normal',
                  }}
                >
                  Tobias Hinchely
                </cite>
              </blockquote>
            </div>

            <div
              style={{
                background: 'var(--pure-white)',
                border: '1px solid var(--border-soft)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 'var(--weight-light)',
                  fontStyle: 'italic',
                }}
              >
                Book et foredrag
              </div>

              <form
                action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {[
                  { name: 'name',         label: 'Navn',          type: 'text' },
                  { name: 'email',        label: 'Email',         type: 'email' },
                  { name: 'organisation', label: 'Organisation',  type: 'text' },
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
                        transition: 'border-color var(--dur-base) var(--ease-out)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--jet-black)')}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--border-soft)')}
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor="arrangement"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 'var(--weight-medium)',
                      letterSpacing: 'var(--tracking-cta)',
                      textTransform: 'uppercase',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    Hvilket arrangement?
                  </label>
                  <textarea
                    id="arrangement"
                    name="arrangement"
                    rows={4}
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

                <Button type="submit" variant="primary" size="md" arrow>
                  Send forespørgsel
                </Button>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 'var(--weight-light)',
                    color: 'var(--fg-muted)',
                    margin: 0,
                  }}
                >
                  Vi vender tilbage inden for 48 timer.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
