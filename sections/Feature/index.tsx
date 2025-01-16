import { featureData } from "@/constants";
import Image from "next/image";

export default function FeatureGrid() {
  return (
    <main className="paddingX mx-auto py-10 lg:py-20 2xl:py-24 bg-beige gap-4">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 border-t-2 border-brown'>
        {featureData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-beige border-l border-t-0 border-b border-r-0 rounded-es-[100px] border-brown p-7"
          >
            <h2 className="text-titleMd lg:text-bodyLg text-brown font-normal leading-10 md:leading-[57px]">
              {item.title}
            </h2>

            {/* Image */}
            <div className="mt-3 flex items-end justify-between">
              <p className="text-lg sm:text-titleMd lg:text-bodyLg text-brown">{index + 1}</p>
              <div className='flex-shrink-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                  width={290}
                  height={235}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}