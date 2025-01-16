"use client";

import { Card, Carousel } from "@/components/Carousel";
import Image from "next/image";

export function Concerns() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full py-20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="max-w-7xl mx-auto text-titleMd md:text-heading font-medium text-brown">
          Concerns
        </h2>
        <p className="text-primary font-normal text-base md:text-body mx-auto mt-4 md:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(9).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-titleMd font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    content: <DummyContent />,
    title: "Facial Anti-Ageing",
    src: "/images/concern-01.png",
  },
  {
    content: <DummyContent />,
    title: "Acne Scarring & Acne Clearance",
    src: "/images/concern-02.png",
  },
  {
    content: <DummyContent />,
    title: "Melasma, Pigmentation & Freckles",
    src: "/images/concern-03.png",
  },
  {
    content: <DummyContent />,
    title: "Rosacea",
    src: "/images/concern-04.png",
  },
  {
    content: <DummyContent />,
    title: "Moles, Skin Tags & Lumps",
    src: "/images/concern-05.png",

  },
  {
    content: <DummyContent />,
    title: "Surgical & Burns Scars",
    src: "/images/concern-06.png",
  },
  {
    content: <DummyContent />,
    title: "Stretch Marks",
    src: "/images/concern-07.png",
  },
  {
    content: <DummyContent />,
    title: "Laser Tattoo Removal",
    src: "/images/concern-08.png",
  },
  {
    content: <DummyContent />,
    title: "Spider Veins",
    src: "/images/concern-09.png",
  },
];
