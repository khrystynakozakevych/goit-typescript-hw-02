import axios from 'axios';
import { ImageAPIResponse } from '../types/imageTypes';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};
axios.defaults.headers.common = { Authorization: `Client-ID ${ACCESS_KEY}` };

export const fetchImages = async (
  query: string,
  page: number
): Promise<ImageAPIResponse> => {
  const response = await axios.get<ImageAPIResponse>(`/search/photos`, {
    params: { query, page },
  });
  return {
    results: response.data.results,
    total: response.data.total,
  };
};
