import { IHero } from '@/types';
import Image from 'next/image';

const Hero: React.FC<{ heroContent: IHero }> = ({ heroContent }) => (
  <section className="relative w-full mx-auto pt-[72px] sm:pt-[400px] xl:pt-[700px]">
    <Image
      fill
      priority
      src={heroContent.backgroundImage}
      alt={heroContent.title}
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="relative z-10 bottom-7 md:bottom-20 left-0 paddingX text-beige">
      <h1 className="text-body md:text-bodyLg xl:text-heading text-beige lg:w-2/3">{heroContent.title}</h1>
      <button
        aria-label="Book now"
        className="mt-3 md:mt-10 text-beige border border-beige rounded-full py-2 px-5 
            hover:bg-lightBlack hover:text-beige 
            focus:outline-none focus:ring-2
            focus:ring-offset-2 transition-all"
      >
        {heroContent.buttonText}
      </button>
    </div>
  </section>
);

export default Hero;