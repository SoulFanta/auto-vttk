import { Gallery } from '@/features/gallery/ui/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Gallery',
};

export default function GalleryPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      <Gallery />
    </main>
  );
}
