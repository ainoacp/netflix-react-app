const API_KEY = 'b36d0e0e939c02f2df7cb44d16a5d12a'

const requests = {
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=ES`,
    fetchTrendingTv: `/trending/tv/day?api_key=${API_KEY}&language=ES`
}

export default requests