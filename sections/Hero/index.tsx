import { IHero } from '@/types';
import Image from 'next/image';

const Hero: React.FC<{ heroContent: IHero }> = ({ heroContent }) => (
  <section className="relative w-full mx-auto pt-[1000px]">
    <Image fill priority src={heroContent.backgroundImage} alt={heroContent.title} className=" absolute object-cover" />
    <div className="relative bottom-7 md:bottom-20 left-0 paddingX text-white z-10">
      <p className="text-titleMd md:text-4xl xl:text-5xl text-white lg:w-2/3">{heroContent.title}</p>
      <button
        aria-label="Book a service"
        className="mt-5 md:mt-10 text-white border border-white rounded-full py-2 px-5 
            hover:bg-lightBlack hover:text-white hover:border-lightBlack 
            focus:outline-none focus:ring-2 focus:ring-lightBlack 
            focus:ring-offset-2 transition-all"
      >
        {heroContent.buttonText}
      </button>
    </div>
  </section>
);

export default Hero;