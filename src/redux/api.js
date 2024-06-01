export const fetchMovies = async () => {
    const response = await fetch('https://api.sampleapis.com/movies/animation');
    return await response.json();
  };
  