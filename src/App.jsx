import Sidebar from './components/Sidebar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Highlights from './components/Highlights'
import WeatherMap from './components/weatherMap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const location = useSelector(state => state.location.value)

  useEffect(() => {

    // const geoLocation = async () => {
    //   if (!location.latitude) {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition((position) => {
    //         dispatch(setLocation({
    //           ...location,
    //           "latitude": position.coords.latitude,
    //           "longitude": position.coords.longitude
    //         }))

    //       })
    //     } else {
    //       console.log("Geolocation not enabled")
    //     }
    //   }
    // }

    // const getLocationName = async () => {
    //   let res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}`)
    //   res = await res.json()
    //   dispatch(setLocation({
    //     ...location,
    //     "locationName": `${res.city}, ${res.countryName}`
    //   }))
    // }

    // geoLocation()
    // getLocationName()

    // console.log(location)

  }, [location]);


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
