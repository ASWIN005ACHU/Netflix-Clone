import '../Style/Banner.css';

const Navbar = () => {
  return (
    <div className='banner col-12' style={{ backgroundImage: `url('https://simkl.in/fanart/11/11483902e81f040cf0_medium.jpg')` }}>
      <div className="navbar">
        <div className="logo">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix Logo" width="100%" className='ml-5' />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="bg-clear padding-5px text-white border-1px white"
            placeholder="Search"
          />
          <button className="search-button" type="submit">
            <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="Search" width="20" />
          </button>
        </div>
        <button className="button-login col-2 rounded mr-5">Login</button>
      </div>
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <h2 className="title text-center">Movie Title</h2>
      <p className="description text-center">Description of the movie goes here.</p>
      <button className="play-button p-1 rounded bg-red text-white border-none border-radius-10px">Play</button>
    </div>
  );
};

export default Navbar;
