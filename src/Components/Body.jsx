import '../Style/Body.css';

const Body = () => {
  return (
    <div className="body">
      <h3 className='text-white ml-5 mb-2'>Drama</h3>
      <div className="category">
        <div className="Body-card">
          <h3 className="title">Movie Title</h3>
          <img src="https://simkl.in/fanart/11/11483902e81f040cf0_medium.jpg" alt="Movie Poster" className="poster rounded" />
          <p className="description">Description of the movie goes here.</p>
          <button className="play-button bg-red text-white no-border">Play</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
