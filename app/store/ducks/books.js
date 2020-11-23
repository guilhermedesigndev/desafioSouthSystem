import produce from 'immer';

export const Types = {
  GET_BOOKS_REQUEST: 'books/GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FALIURE: 'books/GET_BOOKS_FALIURE',

  BOOKS_CLEAN: 'books/BOOKS_CLEAN',
};

const INITIAL_STATE = {
  books: [],
  booksLoading: false,
  booksDone: false,
};

export default function books(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_BOOKS_REQUEST: {
        draft.booksLoading = true;
        draft.booksDone = false;
        break;
      }
      case Types.GET_BOOKS_SUCCESS: {
        draft.books = action.payload.items;
        draft.booksLoading = false;
        draft.booksDone = true;
        break;
      }
      case Types.GET_BOOKS_FALIURE: {
        draft.books = action.payload.items;
        draft.booksLoading = false;
        draft.booksDone = false;
        break;
      }

      case Types.BOOKS_CLEAN: {
        console.log('AQUI');
        draft.books = [];
        break;
      }

      default:
    }
  });
}

export const Creators = {
  getBooks: ({name}) => ({
    type: Types.GET_BOOKS_REQUEST,
    payload: {name},
  }),

  cleanBooks: () => ({
    type: Types.BOOKS_CLEAN,
  }),
};
