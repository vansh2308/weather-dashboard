import Sidebar from './components/Sidebar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Highlights from './components/Highlights'
import WeatherMap from './components/weatherMap'


function App() {
  return(
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
