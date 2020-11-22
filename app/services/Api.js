import axios from 'axios';

export const fetchGoogleBooksByQuery = (bookTitle) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=40&projection=full`,
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data.error.message;
    });
};
