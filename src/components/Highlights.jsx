import wm1 from "./../assets/wm1.png"
import wm2 from "./../assets/wm2.png"
import wm3 from "./../assets/wm3.png"
import { LuSearch } from "react-icons/lu";
import UVTile from "./UVTile";
import SunTile from "./SunTile";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";



export default function Highlights(props) {
  return (
    <div className="highlights ">
      <Tile title={"Wind Speed"} value={7.90} unit={"km/h"} wm={wm1} icon={<FaWind className="text-[1.8rem]" />} />
      <Searchbar />
      <Tile title={"Humidity"} value={84} unit={"%"} wm={wm2} icon={<MdOutlineWaterDrop  className="text-[1.8rem]"/>} />
      <UVTile />
      <SunTile />
      <Tile title={"Visibility"} value={3} unit={"km"} wm={wm3} icon={<MdOutlineVisibility className="text-[1.8rem]" />}/>

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
  return (
    <div className="searchbar  text-white opacity-80">
      <div className="w-full h-1/2 bg-grey rounded-full flex justify-between items-center overflow-hidden">
        <input type="text" className="grow h-full p-5" style={{ "borderRight": "0.1px solid rgba(255, 255, 255, 0.4)" }} />
        <button onClick={() => console.log("hi nehal")}> <LuSearch className="m-5 text-[1.5rem] text-white" /> </button>
      </div>
    </div>
  )
}