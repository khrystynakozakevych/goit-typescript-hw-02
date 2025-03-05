import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};
axios.defaults.headers.common = { Authorization: `Client-ID ${ACCESS_KEY}` };

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/search/photos`, {
    params: { query, page },
  });
  return response.data.results;
};
