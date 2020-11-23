import axios from 'axios';

export const fetchGoogleBooksByQuery = (bookTitle) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=40&projection=full&key=AIzaSyDxDqQu68dsc16Y06XNXo16qzviyszm--A`,
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data.error.message;
    });
};
