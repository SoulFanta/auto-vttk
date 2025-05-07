import { useQuery } from '@tanstack/react-query';
import { galleryApi } from '../api/api';

export const useGallery = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: galleryApi.getImages,
  });
};