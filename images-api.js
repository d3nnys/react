import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'JNtQ9sD8mcCWbimOy1YyWsmxJ4LKUDIQK2QUTP-qSo0';

export const fetchImages = async (currentPage, searchQuery) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 10,
      orientation: 'landscape',
      client_id: API_KEY,
    },
  });

  return response.data.results;
};
