// Eyebrow — small uppercase wide-tracked label used above headings.
//
//   <Eyebrow>01 · Virksomheder</Eyebrow>
//   <Eyebrow accent>★ Nyt foredrag</Eyebrow>
//
// `accent` switches the color to --aureolin against any dark surface,
// otherwise inherits color from the parent.

export default function Eyebrow({ children, accent = false, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize:   'var(--fs-eyebrow)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-cta)',
        textTransform: 'uppercase',
        color: accent ? 'var(--aureolin)' : 'inherit',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
