
import weatherIcon from "./../assets/weather.png"
import { MdOutlinePinDrop } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import watermark from "./../assets/watermark.png"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getIconPresent} from "../features/getIcon";


export default function CurrentWeather(props) {
  const weather = useSelector(state => state.weather.value)
  const location = useSelector(state => state.location.value)



  return (
    <div className='glassmorphism min-h-[48vh] relative flex flex-col justify-end p-5 text-white overflow-hidden'>

      {getIconPresent(weather[1].values)}
      <h1 className="text-[3rem] font-normal ml-3">{Math.floor(weather[1].values.temperatureAvg)} &deg;C</h1>

      <span className="text-xs ml-3 ">Cloudy & Sunny</span>
      <hr className="my-5" style={{ "border": "0.1px solid rgba(255, 255, 255, 0.2)" }} />
      <div className="flex items-center text-xs pl-3 gap-2">
        <MdOutlinePinDrop className="text-[1.2rem]" />
        <span className="whitespace-nowrap  overflow-hidden">{location.locationName }</span>
      </div>
      <div className="flex items-center text-xs pl-3 gap-2 mt-3">
        <MdOutlineCalendarMonth className="text-[1.2rem]" />
        <span>{ (new Date()).toDateString().substring(0, (new Date()).toDateString().length-4) }</span>
      </div>

      <img src={watermark} className="absolute -z-10 blur-[5rem] w-[17rem] left-1/6 opacity-1/2" />

    </div>
  )
}