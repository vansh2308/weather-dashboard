import getWeatherDetails from "./getWeatherDetails";



const getUserLocation = async () => {
  let location = {}
  let weather = null
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      location["latitude"] = position.coords.latitude
      location["longitude"] = position.coords.longitude
      });
    } else {
      console.log("Geolocation is not available in your browser.");
      return
    }
    
    let res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}`)
    res = await res.json()
    location["locationName"] = `${res.city}, ${res.countryName}`
    
    
    let rtWeather = await getWeatherDetails(location.latitude, location.longitude)
    return location, rtWeather
}

export default getUserLocation