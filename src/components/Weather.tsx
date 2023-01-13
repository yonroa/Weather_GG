import { FC } from 'react';
import { weatherSelector } from '../weatherFeature/weatherSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { Spinner } from 'reactstrap';
import Switch from './switchButton';
import Icons from './Icons';
import localTime from './Time';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Weather.css'

// Definition to the weather details
const Weather: FC = () => {
  const { data, loading, err } = useAppSelector(weatherSelector);
  const { switchSide } = useAppSelector((state) => state.switch);

  if (loading) {
    return (
      <div className='spinner'>
        <Spinner color='primary' />
      </div>
    )
  }
  else if (data){
    return (
      <div className='weatherDetails'>
        <div className='Sub-heading'>
          Weather Forecast <div>on</div>
        </div>
        <small className="date">
          {data ? moment().format("MMM DD YYYY") : null}
        </small>
        <small className="hour">
          Local Time: {data ? localTime(data.timezone) : null}
        </small>
        <div className="location">
          {data ? data.name : null}
          <small>({data ? data.sys.country : null})</small>
        </div>
        <div className="forecast-info">
          <div className="forecast-icon">
            {data ? (
              <img
                src={Icons(data.weather[0].main)}
                alt="weather-icon"
              />
            ) : null}
          </div>
          <div className="forecast-value">
            <div className="degrees">
              <span className="degrees-count">
              {data ? switchSide ? (data.main.temp * 1.8 - 459.67).toFixed(2) : (data.main.temp - 273.15).toFixed(2) : null}
              </span>
              <img src='icons/celsius.svg' className='unit'/>
              <div className='switchUnits'>
              <Switch />
              </div>
              <img src='icons/fahrenheit.svg' className='unit'/>
            </div>
            <span className="weather-condition">
              {data ? data.weather[0].main : null}
            </span>
            <div className="additional-info">
              <ul className="list">
                <li>
                  <img src='icons/barometer.svg' alt='barometer'></img>
                  <b>Pressure:</b> {data ? data.main.pressure : null} <b>hPa</b>
                </li>
                <li>
                <img src='icons/humidity.svg' alt='humidity'></img>
                  <b>Humidity:</b> {data ? data.main.humidity : null} <b>%</b>
                </li>
                <li>
                <img src='icons/wind.svg' alt='wind' className='wind'></img>
                  <b>Wind:</b> {data ? data.wind.speed : null} <b>m/s</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className='statusMessage'>{err}</div>
    )
  }
}

export default Weather;