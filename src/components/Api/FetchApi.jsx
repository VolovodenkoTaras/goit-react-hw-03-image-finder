import axios from 'axios';

export const PER_PAGE = 12;
export const USER_KEY = '33585244-9b6eb40017d90c14cfbcb005c';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: USER_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
});

export const fetchPhotoApi = async (searchValue, pageNumber = 1) => {
  try {
    const response = await axios.get(
      `?q=${searchValue}&page=${pageNumber}&${searchParams}}&per_page=${PER_PAGE}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
