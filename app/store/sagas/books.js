import {takeEvery, put, all, call} from 'redux-saga/effects';
import axios from 'axios';
import {fetchGoogleBooksByQuery} from '~/services/Api';

import {Types} from '~/store/ducks/books';

function* getBooks({payload}) {
  try {
    const {name} = payload;

    if (!name) {
      return;
    }

    const response = yield call(fetchGoogleBooksByQuery, name);

    console.log('Response: ', response);

    yield put({type: Types.GET_BOOKS_SUCCESS, payload: response});
  } catch (error) {
    console.log('ERROR', error);
    yield put({type: Types.GET_BOOKS_FALIURE, payload: error});
  }
}

export default all([takeEvery(Types.GET_BOOKS_REQUEST, getBooks)]);
