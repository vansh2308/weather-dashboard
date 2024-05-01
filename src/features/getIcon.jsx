
import rainy from "./../assets/3d weather icons/cloud/7.png"
import snow from "./../assets/3d weather icons/cloud/23.png"
import sunny from "./../assets/3d weather icons/sun/26.png"
import sunnyCloudy from "./../assets/3d weather icons/sun/27.png"


function getIconPresent(data){
  if(data.rainAccumulationSum > 3){
    return <img src={rainy} className="w-[8rem] h-auto" />
  } 
  if(data.snowAccumulationSum > 1 || data.temperatureAvg < 0){
    return <img src={snow} className="w-[8rem] h-auto"/>
  } 
  if(data.cloudCoverAvg > 30){
    return <img src={sunnyCloudy} className="w-[8rem] h-auto"/>
  }
  return <img src={sunny} className="w-[8rem] h-auto"/>
}


function getIconForecast(data){
  if(data.rainAccumulationSum > 3){
    return <img src={rainy} className="w-[2.3rem] mr-10" />
  } 
  if(data.snowAccumulationSum > 1 || data.temperatureAvg < 0){
    return <img src={snow} className="w-[2.3rem] mr-10"/>
  } 
  if(data.cloudCoverAvg > 30){
    return <img src={sunnyCloudy} className="w-[2.3rem] mr-10"/>
  }
  return <img src={sunny} className="w-[2.3rem] mr-10"/>
}

function getWeatherSummary(data){
  if(data.rainAccumulationSum > 3){
    return <span className="text-xs ml-3 ">Rainy</span>
  } 
  if(data.snowAccumulationSum > 1 || data.temperatureAvg < 0){
    return <span className="text-xs ml-3 ">Snowy</span>
  } 
  if(data.cloudCoverAvg > 30){
    return <span className="text-xs ml-3 ">Cloudy & Sunny</span>
  }
  return <span className="text-xs ml-3 ">Sunny</span>
}

export {getIconPresent, getIconForecast, getWeatherSummary}