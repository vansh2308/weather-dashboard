import logo from "./../assets/logo.png"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMap } from "react-icons/md";
import { MdOutlinePinDrop } from "react-icons/md";
import { PiCirclesThreeBold } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";


export default function Sidebar(props) {
  return (
    <div className="relative h-full w-[5rem] glassmorphism flex flex-col items-center justify-between py-4 overflow-y-scroll sidebar grow-0">
      <div>

        <div className="flex flex-col items-center w-full gap-1 pb-4" style={{ "borderBottom": "0.1px solid rgba(255, 255, 255, 0.4)" }} >
          <img src={logo} className="w-1/2" />
          <span className="text-white text-[0.6rem] font-semibold">Weathry</span>
        </div>

        <ul className="flex flex-col w-full">
          <button> <LuLayoutDashboard/> </button>
          <button> <MdOutlineMap /> </button>
          <button> <MdOutlinePinDrop />  </button>
          <button> <PiCirclesThreeBold /> </button>
          <button> <MdOutlineCalendarMonth /> </button>
          <button> <IoSettingsOutline /> </button>
        </ul>
      </div>


      <div className="flex flex-col items-center justify-center w-full mt-5 z-20">
        <div className="bg-black rounded-[100%] w-1/2 aspect-square relative overflow-hidden text-white">
          <FaRegBell className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="rounded-[100%] bg-red w-[0.4rem] aspect-square top-1/2 left-1/2 -translate-y-2 translate-x-[0.1rem] absolute z-40" />
        </div>

        <div className="profile-pic rounded-[100%] w-[60%] mt-5 mb-3 aspect-square relative overflow-hidden drop-shadow-md  ">
        </div>
      </div>


      <div className="absolute bg-lblue rounded-full h-[16rem] w-[4rem] top-[40%] -left-8 blur-[9rem]">

      </div>

    </div>
  )
}