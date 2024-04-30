import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css";


export default function WeatherMap() {

  return (
    // <MapContainer className="w-full h-full bg-grey" />

    <MapContainer
      id="map"
      // where the map should start, this is for Oslo
      center={[43.7128, -76.0060]}
      zoom={6}
      className="w-full h-full "
      zoomControl={false}
    >
      <TileLayer
        className="bg-red fill-green"
        url = {process.env.WEATHER_MAP_URL}
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
      />

    </MapContainer>
  )
}



