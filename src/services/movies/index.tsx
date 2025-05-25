import axios from 'axios';

const getMovies = async (query: string, page: number = 1) => {
  const { data } = await axios.get(
    "http://www.omdbapi.com/", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        s: query,
        page
      }
    });
  return data;
}

export { getMovies };
