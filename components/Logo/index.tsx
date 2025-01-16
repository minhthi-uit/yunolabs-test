import Image from "next/image";

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant }) => {
  const logoSrc = variant === 'light' ? '/images/light-logo.png' : '/images/logo.png';

  return (
    <div className="flex items-center">
      <Image src={logoSrc} alt="logo" width={160} height={160} />
    </div>
  );
};

export default Logo;