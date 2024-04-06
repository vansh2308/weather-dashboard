import React, { useEffect } from 'react';
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { useRef } from 'react';
import { useGauge } from 'use-gauge';
// import { Chart } from 'chart.js/auto';

Chart.register(ArcElement)




export default function UVTile(props) {
  const canvasRef = useRef(null)
  const baselineRef = useRef(null)


  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    const gradient = ctx.createLinearGradient(20, 0, 220, 0);
    gradient.addColorStop(1, "rgba(62, 205, 224, 1)");
    gradient.addColorStop(0.5, "rgba(62, 205, 224, 1)");
    gradient.addColorStop(0, "rgba(29, 111, 242, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 200, 100);

    let chartStatus = Chart.getChart("canvas");
    let baselineStatus = Chart.getChart("baselineCanvas")
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    if (baselineStatus != undefined) {
      baselineStatus.destroy()
    }

    new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: '# of votes',
            data: [12, 5],
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

    new Chart(baselineRef.current, {
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


  }, [])


  return (
    <div className="uv relative overflow-hidden text-white">
      <canvas ref={baselineRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="baselineCanvas"> </canvas>
      <canvas ref={canvasRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="canvas"> </canvas>

      <div className='flex justify-between px-[9%] bottom-10 text-white text-xs font-thin absolute w-full'>
        <span>0</span>
        <span>12</span>
      </div>

      <div className='absolute flex justify-center items-center flex-col top-1/2 left-1/2 -translate-x-1/2'>
        <h1 className='text-[2.5rem]'>5.5</h1>
        <h5 className='text-xs font-thin'>UV Index</h5>
      </div>



    </div>
  )
}