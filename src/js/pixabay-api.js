import axios from 'axios';

const API_KEY = '43304487-b7d5c7fa3c9a8a42508d5a037';
axios.defaults.baseURL = 'https://pixabay.com';

export const getFotos = async (str, page, per_page) => {
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: str,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page,
      safesearch: 'true',
    },
  };

  return await axios.get('/api/', axiosOptions);
};

// export const getFotos = (str, page, per_page) => {
//   const API_KEY = '43304487-b7d5c7fa3c9a8a42508d5a037';
//   const BASE_URL = 'https://pixabay.com/api';
//   const ENDPOINT = '';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: str,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     page,
//     per_page,
//     safesearch: 'true',
//   });

//   return fetch(`${BASE_URL}${ENDPOINT}/?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     console.log(response);

//     return response.json();
//   });
// };

// export async function fetchImages(str) {
//   try {
//     const response = await fetch(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${str}&image_type=photo`
//     );
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
