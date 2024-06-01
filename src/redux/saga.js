import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_MOVIES, setMovies } from './actions';
import { fetchMovies } from './api';

function* getMoviesSaga() {
  try {
    const movies = yield call(fetchMovies);
    yield put(setMovies(movies));
  } catch (error) {
    console.error('Failed to fetch movies', error);
  }
}

function* rootSaga() {
  yield takeEvery(GET_MOVIES, getMoviesSaga);
}

export default rootSaga;
