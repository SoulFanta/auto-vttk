'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GallerySection() {
  // Array with gallery images data
  const galleryImages = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Наш автопарк - современные автовозы'
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Профессиональная погрузка автомобилей'
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Надежная фиксация транспорта'
    },
    // Add more images as needed
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={85}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/gallery" 
            className="inline-block bg-gradient-to-r transition-colors from-[#fdc50d] to-[#f9a825] hover:from-[#f9a825] hover:to-[#fdc50d] text-white font-medium py-3 px-6 rounded  duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Смотреть всю галерею
          </Link>
        </div>
      </div>
    </section>
  );
}