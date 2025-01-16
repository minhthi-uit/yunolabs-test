"use client"
import Logo from '@/components/Logo';
import { X } from 'lucide-react';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <header className="relative bg-beige paddingX">
      <nav className="container max-w-screen-2xl mx-auto flex items-center justify-between p-4">
        <Logo variant='dark' />
        <HamburgerMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        <BookNowButton />
      </nav>
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

const HamburgerMenu: React.FC<{ openMenu: boolean; toggleMenu: () => void }> = ({ openMenu, toggleMenu }) => (
  !openMenu ? (
    <button onClick={toggleMenu} aria-label='open menu'>
      <svg width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1.5" x2="50" y2="1.5" stroke="#434343" stroke-width="2" />
        <line y1="16.5" x2="50" y2="16.5" stroke="#434343" stroke-width="2" />
      </svg>
    </button>
  ) : (
    <X
      className="w-7 h-7 cursor-pointer transition-transform hover:rotate-90"
      onClick={toggleMenu}
    />
  )
);

const BookNowButton: React.FC = () => (
  <button aria-label='book now' className="hidden md:block bg-brown text-beige text-base rounded-full py-3 px-6 transition-all">
    Book now
  </button>
);

const MobileMenu: React.FC<{ openMenu: boolean; toggleMenu: () => void }> = ({ openMenu, toggleMenu }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full z-40 bg-beige transition-transform duration-500 ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
  >
    {openMenu && <MobileNavbar setOpenMenu={toggleMenu} />}
  </div>
);

export default Navbar;