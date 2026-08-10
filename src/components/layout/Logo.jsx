import logoImg from '../../assets/logos/logo_no_background.png';

export function Logo({ size = 44, className, title, alt = '' }) {
  return (
    <img
      src={logoImg}
      alt={title || alt || 'Healing Horizon'}
      className={className}
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  );
}

export default Logo;
