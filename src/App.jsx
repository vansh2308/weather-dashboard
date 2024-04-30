import Sidebar from './components/Sidebar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Highlights from './components/Highlights'
import WeatherMap from './components/weatherMap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWeather } from "./features/weatherSlice"

function App() {
  const location = useSelector(state => state.location.value)
  const weather = useSelector(state => state.weather.value)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(weather)
    async function fetchWeatherDetails() {
      const weather_url = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=${location.latitude}%2C%20${location.longitude}&timesteps=1d&units=metric`;

      let weather_options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
        }
      };
      try {
        let weather_response = await fetch(weather_url, weather_options);
        weather_response = await weather_response.json();
        dispatch(setWeather(weather_response.timelines.daily))
      } catch (error) {
        console.error(error);
      }

    }
    fetchWeatherDetails()

  }, [location])


  return (
    <div className='h-screen overflow-hidden w-screen bg-black flex p-7 gap-7'>
      <Sidebar />

      <div className='h-full overflow-y-scroll wrapper grow '>
        <CurrentWeather />
        <Highlights />
        <Forecast />

        <div className='w-full h-full rounded-[17px] overflow-hidden'>
          <WeatherMap />
        </div>

      </div>

    </div>

  )
}

export default App
