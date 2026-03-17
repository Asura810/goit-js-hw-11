import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55067966-cf05e757d51b20726f9c2f743';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
