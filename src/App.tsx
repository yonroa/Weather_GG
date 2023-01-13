import { FC } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className='Container'>
        <Search />
        <Weather />
      </div>
    </div>
  );
}

export default App;
