import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async topic => {
  const response = await axios.get(`/search/photos`, {
    params: { query: topic, per_page: 12 },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data.results;
};
