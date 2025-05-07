import { GalleryImage } from "@/entities/Image/types";
import { axiosClient } from "@/shared/api/client";


export const galleryApi = {
  getImages: async (): Promise<GalleryImage[]> => {
    const response = await axiosClient.get('/gallery');
    // Явно возвращаем response.data, а не весь response
    return response.data; 
  },
};