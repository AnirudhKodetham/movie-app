import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from './redux/actions';
import MovieGrid from './components/MovieGrid';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="top-bar">
        <h1>Movie Grid</h1>
      </div>
      <div className="content">
        <MovieGrid />
      </div>
    </div>
  );
}

export default App;
