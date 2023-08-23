import './App.scss';
import Search from './components/Search';

function App() {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className="header-wrapper">
        <h1>Links Preview</h1>
      </div>
      <div className="search-wrapper">
        <Search onSearch={handleSearch} />
      </div>
    </>
  );
}

export default App;
