'use client';

import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import { useGallery } from '../model/use-gallery';
import { Loader } from '@/shared/ui/Loader';


export const Gallery = () => {
  const { data: images, isLoading, error } = useGallery();
    console.log(images)
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
      isLoading ? <Loader /> : 
      error ? <ErrorMessage message="Failed to load gallery" /> :
      images?.map((image) => (
        <div key={image.filename} className="group relative overflow-hidden rounded-lg shadow-md">
          <img
            src={image.url}
            alt={image.filename}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm truncate">{image.filename}</span>
          </div>
        </div>
      ))}
    </div>
  );
};