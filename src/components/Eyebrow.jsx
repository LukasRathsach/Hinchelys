export default function Eyebrow({ children, accent = false, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-eyebrow)',
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
