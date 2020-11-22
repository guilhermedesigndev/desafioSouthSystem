import produce from 'immer';

export const Types = {
  GET_BOOKS_REQUEST: 'books/GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FALIURE: 'books/GET_BOOKS_FALIURE',
};

const INITIAL_STATE = {
  books: [],
};

export default function books(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_BOOKS_SUCCESS: {
        console.log('ACTION: ', action);
        draft.books = action.payload.items;
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
};
