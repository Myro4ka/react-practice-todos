import axios from 'axios';

const API_KEY = 'KAeFGlXHO7MeYlhhXIpHmgaGMV5wBFxz21Yq20jQonwtig6JKBIAPw5K';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query = 'cat', page = 1) => {
  const { data } = await axios.get('search', { params: { query, page } });
  return data;
};
