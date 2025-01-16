import { Navigation } from '@/constants';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileNavbarProps {
  setOpenMenu: (value: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ setOpenMenu }) => {
  return (
    <section className="fixed inset-0 bg-beige flex flex-col items-center sm:items-start px-4 justify-center transition-all duration-500 z-50">
      <button
        aria-label="close menu"
        className="absolute top-6 right-6 bg-beige text-primary w-10 h-10 rounded-full shadow-lg transition-transform flex items-center justify-center"
        onClick={() => setOpenMenu(false)}
      >
        <X className="w-6 h-6 text-center" />
      </button>
      <nav>
        <ul className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          {Navigation.map(({ href, text }) => (
            <li key={href}>
              <Link href={href}>
                <span className="text-grey text-bodyLd md:text-titleMd xl:text-heading text-[#7D614B] font-medium tracking-wide transition-colors hover:text-primary">
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default MobileNavbar;