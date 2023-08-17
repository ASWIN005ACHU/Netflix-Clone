import { useEffect, useState } from 'react';
import '../Style/Body.css';
import axios from 'axios';
import { TOP_MOVIES , BASE_URL , API_KEY } from '../Urls/Url';

const genres = [
  { id: '28', name: 'Action' },
  { id: '12', name: 'Adventure' },
  { id: '16', name: 'Animation' },
  { id: '35', name: 'Comedy' },
  { id: '80', name: 'Crime' },
  { id: '99', name: 'Documentary' },
  { id: '18', name: 'Drama' },
  { id: '10751', name: 'Family' },
  { id: '14', name: 'Fantasy' },
  { id: '36', name: 'History' },
  { id: '27', name: 'Horror' },
  { id: '10402', name: 'Music' },
  { id: '9648', name: 'Mystery' },
  { id: '10749', name: 'Romance' },
  { id: '878', name: 'Science Fiction' },
  { id: '53', name: 'Thriller' },
  { id: '10752', name: 'War' }
];


const Body = () => {
  const [genreData, setGenreData] = useState({}); 
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreData = {};
        const response = await axios.get(TOP_MOVIES);
        setTopMovies(response.data.results);
        for (const genre of genres) {
          const response = await axios.get(
            `${BASE_URL}/discover/movie?${API_KEY}include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=${genre.id}`
          );
          genreData[genre.id] = response.data.results;
        }

        setGenreData(genreData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="body m-3 rounded">
      <h3 className='ml-5 mt-3 mb-3 mr-5 text-white'>Top Chart</h3>
      <div className="category rounded">
        {topMovies.map(movie => (
          <div key={movie.id} className="Bodycard ml-2 mr-2 ">
            <div className='titleDiv'>
              <h3 className="title">{movie.title}</h3>
            </div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" className="poster" />
            <div className='overviewDiv mt-2'>
              <p className="description">{truncateText(movie.overview, 10)}</p>
            </div>
            <button className="play-button bg-red text-white no-border">Play</button>
          </div>
        ))}
      </div>

      {/* genre */}
      {genres.map(genre => (
        <div key={genre.id} className="genre-section">
          <h3 className='ml-5 mt-3 mb-3 mr-5 text-white'>{genre.name}</h3>
          <div className="category rounded">
            {genreData[genre.id]?.map(movie => (
              <div key={movie.id} className="Bodycard ml-2 mr-2 ">
                <div className='titleDiv'>
                  <h3 className="title">{movie.title}</h3>
                </div>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" className="poster" />
                <div className='overviewDiv mt-2 mb-3'>
                  <p className="description">{truncateText(movie.overview, 10)}</p>
                </div>
                <button className="play-button bg-red text-white no-border">Play</button>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Body;