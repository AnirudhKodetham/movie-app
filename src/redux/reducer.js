import { GET_MOVIES, SET_MOVIES } from './actions';

const initialState = {
  movies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
