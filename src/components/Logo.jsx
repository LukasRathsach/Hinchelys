export default function Logo({
  type = 'logotype',
  color = 'black',
  height = 28,
  href = '/',
  style,
  ...rest
}) {
  const src = `/assets/${type}_${color}.svg`;
  const img = (
    <img
      src={src}
      alt="HINCHELYS"
      style={{ height: `${height}px`, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
  if (!href) return img;
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        border: 'none',
        transition: 'opacity var(--dur-base) var(--ease-out)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
    >
      {img}
    </a>
  );
}
