import BackToTopButton from "@/components/BackToTopButton";
import { heroContent, testimonials } from "@/constants";
import { Concerns } from "@/sections/Concerns";
import FeatureGrid from "@/sections/Feature";
import Hero from "@/sections/Hero";
import TestimonialSlider from "@/sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero heroContent={heroContent} />
      <FeatureGrid />
      <Concerns />
      <TestimonialSlider testimonials={testimonials} />
      <BackToTopButton />
    </div>
  );
}
