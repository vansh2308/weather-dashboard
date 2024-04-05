import wm1 from "./../assets/wm1.png"
import wm2 from "./../assets/wm2.png"
import wm3 from "./../assets/wm3.png"
import { LuSearch } from "react-icons/lu";
import UVTile from "./UVTile";
import SunTile from "./SunTile";


export default function Highlights(props){
  return(
    <div className="highlights">
      <Tile title={"Wind Speed"} value={7.90} unit={"km/h"} wm={wm1}/>
      <Searchbar />
      <Tile title={"Humidity"} value={84} unit={"%"} wm={wm2}/>
      <UVTile />
      <SunTile />
      <Tile title={"Visibility"} value={3} unit={"km"} wm={wm3}/>
    </div>
  )
}


const Tile = ({title, value, unit, wm}) => {
  return(
    <div className="glassmorphism p-4 text-white text-md flex flex-col justify-between relative overflow-hidden">
      <h3 className="font-normal text-[0.7rem]">{title}</h3>
      <div className="flex w-full text-sm font-thin">
        <p><span className="font-semibold text-[3rem]">{value}</span> {unit} </p>
      </div>

      <img src={wm} className="absolute -right-28 -z-40 blur-[2rem] opacity-[50%] " />

    </div>
  )
}


const Searchbar = (props) => {
  return(
    <div className="searchbar text-white">
      <div className="w-full h-1/2 bg-grey rounded-full flex justify-between items-center overflow-hidden">
        <input type="text" className="grow h-full p-5" style={{ "borderRight": "0.1px solid rgba(255, 255, 255, 0.4)" }} />
        <button onClick={() => console.log("hi nehal")}> <LuSearch className="m-5 text-[1.5rem] text-white" /> </button>
      </div>
    </div>
  )
}