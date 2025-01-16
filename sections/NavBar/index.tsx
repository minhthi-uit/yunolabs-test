"use client"
import Logo from '@/components/Logo';
import { LucideMenu, X } from 'lucide-react';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <header className="relative bg-prime paddingX">
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
    <LucideMenu
      className="w-7 h-7 cursor-pointer transition-transform hover:scale-110"
      onClick={toggleMenu}
    />
  ) : (
    <X
      className="w-7 h-7 cursor-pointer transition-transform hover:rotate-90"
      onClick={toggleMenu}
    />
  )
);

const BookNowButton: React.FC = () => (
  <button aria-label='book now' className="hidden md:block bg-lightBlack text-white border border-black rounded-full py-2 px-5 hover:bg-black transition-all">
    Book now
  </button>
);

const MobileMenu: React.FC<{ openMenu: boolean; toggleMenu: () => void }> = ({ openMenu, toggleMenu }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full z-40 bg-white transition-transform duration-500 ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
  >
    {openMenu && <MobileNavbar setOpenMenu={toggleMenu} />}
  </div>
);

export default Navbar;