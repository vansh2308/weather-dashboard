import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import weatherIcon from "./../assets/weather.png"
import { useSelector } from "react-redux";

export default function Forecast(props) {
  const [display, setDisplay] = useState(false)
  const [days, setDays] = useState(7)
  const weather = useSelector(state => state.weather.value)

  const dropdownHandler = (val) => {
    setDays(val)
    setDisplay(false)
  }

  return (
    <div className="overflow-hidden text-white text-sm">
      <header className="flex items-center justify-between">
        <span className="font-medium ">7 Days forecast</span>

        <div className="relative">
          <button className="py-2 px-4 text-[0.7rem] bg-grey text-white rounded-lg flex items-center"
            onClick={() => display ? setDisplay(false) : setDisplay(true)}>
            7 days  <MdKeyboardArrowDown className="text-[1rem] ml-2" />
          </button>

          {display && <div className="dropdown py-2 rounded-lg mt-2 flex flex-col w-full absolute bg-grey font-bold text-white text-[0.6rem] z-40 " >
            <button className="py-1" onClick={() => dropdownHandler(3)}>3 days</button>
            <button className="py-1" onClick={() => dropdownHandler(7)}>7 days</button>
            <button className="py-1" onClick={() => dropdownHandler(10)}>10 days</button>
            <button className="py-1" onClick={() => dropdownHandler(30)}>30 days</button>
          </div>}
        </div>
      </header>



      <ul className="flex flex-col h-full my-3 pb-9 overflow-y-scroll">
        {weather.slice(0, days).map((item, i) => {
          return(
            <ForecastItem key={i} item={item} />
          )
        })}
  
      </ul>
    </div>
  )
}


const ForecastItem = ({item}) => {

  return(
    <li className="py-4 w-full flex items-center justify-between text-[0.7rem] font-extralight"
        style={{ "borderTop": "0.1px solid rgba(255, 255, 255, 0.2)" }}>

      <img src={weatherIcon} className="w-[2.3rem] mr-10"/>
      <h1 className=""> <span className="font-medium text-lg">{Math.floor(item.values.temperatureMax)} &deg;/</span>{Math.floor(item.values.temperatureMin)} </h1>
      
      <p className="grow text-right mr-3">
        { (new Date(item.time)).toDateString().substring(0, (new Date(item.time)).toDateString().length-4) }
      </p>
    </li>
  )
} 