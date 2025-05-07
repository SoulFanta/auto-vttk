// src/features/about/ui/AboutSection.tsx
import Image from 'next/image';
import { aboutConfig } from '../config';

export const AboutSection = () => {
  return (
    <section className="py-12 ">
      <div className="container justify-center flex-col items-center flex mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
            О нас
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {aboutConfig.description}
          </p>
        </div>
      <Image width={75} height={75} src={aboutConfig.logoPath} alt={aboutConfig.altLogo} ></Image>
      </div>
    </section>
  );
};