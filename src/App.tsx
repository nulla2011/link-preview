import { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import Show from './components/Show';

function App() {
  const [url, setUrl] = useState('');
  const handleSearch = (value: string) => {
    setUrl(value);
  };
  return (
    <>
      <div className="header-wrapper">
        <h1 className="my-4">Link Preview</h1>
        <p>Basic information for Torrent/Magnet/Ed2k link</p>
        <p className="fw-light" style={{ fontSize: '0.9rem' }}>
          Just another instance of{' '}
          <a href="https://whatslink.info/" target="_blank">
            whatslink.info
          </a>{' '}
          api
        </p>
      </div>
      <div className="search-wrapper">
        <Search onSearch={handleSearch} />
      </div>
      <div className="show-wrapper">
        <Show url={url.split('&')[0]} />
      </div>
    </>
  );
}

export default App;
