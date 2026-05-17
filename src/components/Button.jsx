import React from 'react';

const baseStyle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  fontSize: '13px',
  letterSpacing: 'var(--tracking-cta)',
  textTransform: 'uppercase',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'all var(--dur-base) var(--ease-out)',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
};

const sizeMap = {
  sm: { height: '40px', padding: '0 18px' },
  md: { height: '48px', padding: '0 24px' },
  lg: { height: '56px', padding: '0 32px' },
};

const variantStyle = {
  primary: {
    background: 'var(--jet-black)',
    color: 'var(--alabaster)',
    border: '1px solid var(--jet-black)',
    borderRadius: '2px',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--jet-black)',
    border: '1px solid var(--jet-black)',
    borderRadius: '2px',
  },
  link: {
    background: 'transparent',
    color: 'var(--jet-black)',
    padding: '0',
    height: 'auto',
    border: 'none',
    borderRadius: '0',
  },
};

const hoverStyle = {
  primary: { background: 'var(--alabaster)', color: 'var(--jet-black)' },
  ghost:   { background: 'var(--jet-black)', color: 'var(--alabaster)' },
  link:    { opacity: 0.55 },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  as: Component = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const styles = {
    ...baseStyle,
    ...(variant !== 'link' ? sizeMap[size] : {}),
    ...variantStyle[variant],
    ...(hover ? hoverStyle[variant] : {}),
  };
  return (
    <Component
      {...rest}
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {(arrow || variant === 'link') && <span aria-hidden="true">→</span>}
    </Component>
  );
}
