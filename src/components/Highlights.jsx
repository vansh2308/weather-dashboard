import wm1 from "./../assets/wm1.png"
import wm2 from "./../assets/wm2.png"
import wm3 from "./../assets/wm3.png"
import { LuSearch } from "react-icons/lu";
import UVTile from "./UVTile";
import SunTile from "./SunTile";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../features/locationSlice";

function one_dp(val){ 
  return val.toString().substring(0, val.toString().length-1)
}

export default function Highlights(props) {
  const weather = useSelector(state => state.weather.value)

  return (
    <div className="highlights ">
      <Tile title={"Wind Speed"} 
      value={one_dp(weather[1].values.windSpeedAvg)}
      unit={"km/h"} wm={wm1} icon={<FaWind className="text-[1.8rem]" />} />
      <Searchbar />
      <Tile title={"Humidity"} 
      value={one_dp(weather[1].values.humidityAvg)} 
      unit={"%"} wm={wm2} icon={<MdOutlineWaterDrop className="text-[1.8rem]" />} />
      <UVTile />
      <SunTile />
      <Tile title={"Visibility"} 
      value={one_dp(weather[1].values.visibilityAvg)}
      unit={"km"} wm={wm3} icon={<MdOutlineVisibility className="text-[1.8rem]" />} />

      <div className="blur-[6rem] w-[30%] h-[2.5rem] absolute right-28 blob" />
    </div>
  )
}


const Tile = ({ title, value, unit, wm, icon }) => {
  return (
    <div className="glassmorphism p-4 text-white text-md flex justify-between items-center relative overflow-hidden">
      <div className="flex flex-col gap-3">
        {icon} <h3 className="font-normal text-[0.7rem]">{title}</h3>
      </div>

      <div className="text-sm font-thin align-middle min-h-max">
        <span className="font-semibold text-[3rem]">{value}</span> <span> {unit} </span>
      </div>
      <img src={wm} className="absolute -right-28 -z-40 blur-[2rem] opacity-[50%] " />
    </div>
  )
}


const Searchbar = (props) => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const location = useSelector(state => state.location.value)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = `https://geocode.maps.co/search?q=${inputRef.current.value}&api_key=${process.env.GEOCODE_API}`
    const options = { method: 'GET' }

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch(setLocation({
        "latitude": result[0].lat,
        "longitude": result[0].lon,
        "locationName": result[0].display_name
      }))


    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="searchbar  text-white opacity-80">
      <div className="w-full h-1/2 bg-grey rounded-full flex justify-between items-center overflow-hidden">
        <form className="w-full h-full flex" onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder="Search location" type="text" className="grow h-full p-5" style={{ "borderRight": "0.1px solid rgba(255, 255, 255, 0.4)" }} />
          <button type="submit"> <LuSearch className="m-5 text-[1.5rem] text-white" /> </button>
        </form>
      </div>
    </div>
  )
}