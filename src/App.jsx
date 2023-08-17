import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Body from './Components/Body';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <div>
      <Banner selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <Body selectedGenre={selectedGenre} />
    </div>
  );
}

export default App;
