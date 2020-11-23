import produce from 'immer';

export const Types = {
  GET_BOOKS_REQUEST: 'books/GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FALIURE: 'books/GET_BOOKS_FALIURE',

  ADD_BOOK_FAVORITE: 'books/ADD_BOOK_FAVORITE',
  REMOVE_BOOK_FAVORITE: 'books/REMOVE_BOOK_FAVORITE',

  BOOKS_CLEAN: 'books/BOOKS_CLEAN',
  BOOK_SELECIONADO: 'books/BOOK_SELECIONADO',
};

const INITIAL_STATE = {
  books: [],
  booksLoading: false,
  booksDone: false,
  booksFavorite: [],
  bookSelecionado: {},
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
        draft.books = [];
        draft.booksLoading = false;
        draft.booksDone = false;
        break;
      }

      case Types.BOOKS_CLEAN: {
        draft.books = [];
        draft.bookSelecionado = {};
        break;
      }

      case Types.ADD_BOOK_FAVORITE: {
        const {books, bookSelecionado} = draft;

        const newBookFavorite = {
          ...action.payload.book,
          isFavorite: true,
        };

        draft.booksFavorite = draft.booksFavorite.concat(newBookFavorite);

        if (Array.isArray(books)) {
          const indexBook = books.findIndex(
            (book) => book.id === action.payload.book.id,
          );

          books[indexBook].isFavorite = true;
          bookSelecionado.isFavorite = true;
        }

        break;
      }

      case Types.REMOVE_BOOK_FAVORITE: {
        draft.booksFavorite = draft.booksFavorite.filter(
          (book) => book.id !== action.payload.idBook,
        );
        break;
      }

      case Types.BOOK_SELECIONADO: {
        draft.bookSelecionado = action.payload.book;

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

  addBookFavorite: ({book}) => ({
    type: Types.ADD_BOOK_FAVORITE,
    payload: {book},
  }),

  removeBookFavorite: ({idBook}) => ({
    type: Types.REMOVE_BOOK_FAVORITE,
    payload: {idBook},
  }),

  bookSelecionado: ({book}) => ({
    type: Types.BOOK_SELECIONADO,
    payload: {book},
  }),
};
