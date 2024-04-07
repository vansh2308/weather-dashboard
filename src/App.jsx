import Sidebar from './components/Sidebar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Highlights from './components/Highlights'
import WeatherMap from './components/weatherMap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from './features/locationSlice'
import getUserLocation from './features/getUserLocation'
import { setWeather } from './features/weatherSlice'


function App() {
  const dispatch = useDispatch()

  useEffect( () => { 
    const getLocationWeather = async () => {
      let {userLocation, rtWeather} = await getUserLocation()
      dispatch(setLocation(userLocation)) 
      dispatch(setWeather(rtWeather))

    }

    getLocationWeather()
  }, []);


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
