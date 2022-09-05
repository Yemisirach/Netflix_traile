// const API_KEY = "process.env.REACT_APP_API_KEY";
const API_KEY = "543075708b00bf51696ce5eb477310ae";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMystery: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
  fetchScifi: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
  fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchBestDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`,

  // https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=<<api_key>>,
};
export default requests;
// https://api.themoviedb.org/4/list/1?api_key=543075708b00bf51696ce5eb477310ae
