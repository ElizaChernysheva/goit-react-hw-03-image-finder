import axios from 'axios';

const API_KEY = '27830209-3f5c1f8822da29de83683a02e';
const BASE_URL = 'https://pixabay.com/api/';

 const fetchImgsData = async (data, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  });

  return (await axios.get(`${BASE_URL}?${searchParams}`)).data;
};

export default fetchImgsData;

