import { useEffect, useState } from 'react';
import '../Style/Banner.css';
import axios from 'axios';
import PropTypes from 'prop-types'
import { BASE_URL, API_KEY } from '../Urls/Url';

const Banner = ({ setSelectedGenre }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?${API_KEY}&language=en-US`);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovieInfo(response.data.results[randomIndex]);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovie();

    const interval = setInterval(fetchRandomMovie, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <div className={`banner col-12 ${loaded ? 'loaded' : ''}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path})` }}>
      <div className="navbar">
        <div className="logo">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix Logo" width="100%" className='ml-5' />
        </div>
        <select
          className="SelectGenre col-2 p-2 rounded-pill text-white text-center"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option className='text-dark text-center' value="">Select a Genre</option>
          {genres.map(genre => (
            <option
              key={genre.id}
              className='text-white text-center'
              value={genre.id}
            >
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className='lineargnt'></div>
      {movieInfo && (
        <div className="card">
          <h2 className="title text-center">{movieInfo.title}</h2>
          <p className="description text-center">{movieInfo.overview}</p>
          <button className="play-button p-1 rounded bg-red text-white border-none border-radius-10px">Play</button>
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  setSelectedGenre: PropTypes.func.isRequired,
};

export default Banner;
