import { FC, useState, FormEvent } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchWeatherByCity } from '../weatherFeature/weatherSlice';
import '../css/Search.css';

// Definitio to the search bar
const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchWeatherByCity(city));
    setCity('');
  }

  return(
    <div>
      <div className='header'>Weather Finder</div>
        <form className="search-form" onSubmit={submitHandler}>
          <input 
            type="text"
            placeholder="Search Weather by City"
            value={city}
            onChange={changeHandler}
          />
        <button>Find</button>
      </form>
      <div className="helper-text">Type City Name and Hit Enter ( Rome, IT )</div>
    </div>
  );  
}

export default Search;
