export const API_KEY = 'api_key=3defdeaf2668fb00e771941a5f0c68b3&'
export const BASE_URL = 'https://api.themoviedb.org/3'

export const TOP_MOVIES = `${BASE_URL}/trending/movie/day?${API_KEY}language=en-US`
export const MOVIES = `${BASE_URL}/discover/movie?${API_KEY}include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=`