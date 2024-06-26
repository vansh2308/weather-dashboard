import React, { useCallback, useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js'
import { useRef } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

Chart.register(ArcElement)


export default function SunTile(props) {
  const sunCanvasRef = useRef(null)
  const sunBaselineRef = useRef(null)
  const weather = useSelector(state => state.weather.value)
  const location = useSelector(state => state.location.value)


  useEffect(() => {

    const ctx = sunCanvasRef.current.getContext("2d")
    const gradient = ctx.createLinearGradient(20, 0, 220, 0);
    gradient.addColorStop(1, "#ff8157");
    gradient.addColorStop(0.5, "#ff8157");
    gradient.addColorStop(0, "#ffc62d");
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 200, 100);

    let chartStatus = Chart.getChart("sun_canvas");
    let baselineStatus = Chart.getChart("sun_baselineCanvas")
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    if (baselineStatus != undefined) {
      baselineStatus.destroy()
    }

    new Chart(sunCanvasRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: '# of votes',
            data: [6, 4],
          }
        ],
      },

      options: {
        circumference: 180,
        rotation: -90,
        borderColor: "transparent",
        borderRadius: 20,
        cutout: "80%",
        elements: {
          arc: {
            backgroundColor: [gradient, "transparent"],

          }
        },

      }
    })

    new Chart(sunBaselineRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: '# of votes',
            data: [12, 0],
          }
        ],
      },

      options: {
        circumference: 180,
        rotation: -90,
        borderRadius: 20,
        cutout: "80%",
        radius: "100%",
        borderColor: "transparent",
        elements: {
          arc: {
            backgroundColor: "#353942",
          }
        },
        animation: {
          animateRotate: false
        }

      }
    })
  }, [weather])
  


  return (
    <div className="sun relative overflow-hidden text-white">
      <canvas ref={sunBaselineRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="sun_baselineCanvas"> </canvas>
      <canvas ref={sunCanvasRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="sun_canvas"> </canvas>

      <div className='flex justify-between px-[6%] bottom-4 text-yellow text-xs font-normal absolute w-full'>
        <div className='flex flex-col items-center'>
          <span>Sunrise</span>
          <span className='text-white text-sm font-light'>{timeFormat(weather[1].values.sunriseTime)}</span>
        </div>
        <div className='flex flex-col items-center'>
          <span>Sunset</span>
          <span className='text-white text-sm font-light'>{timeFormat(weather[1].values.sunsetTime)}</span>
        </div>
      </div>

      <div className='absolute flex justify-center items-center flex-col bottom-12 left-1/2 -translate-x-1/2'>
        <IoSunnyOutline className='text-yellow text-[2.5rem] opacity-70'/>
      </div>
    </div>
  )
}

function timeFormat(ISOtime){
  return (new Date(ISOtime)).toLocaleTimeString().substring(0, 5)
}