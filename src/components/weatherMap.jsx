import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function FlyMapTo(props) {
  const location = useSelector(state => state.location.value)
  const map = useMap();

  useEffect(() => {
    map.flyTo([location.latitude, location.longitude], 6);
  });
  return null;
}


export default function WeatherMap() {
  const location = useSelector(state => state.location.value)
  const [center, setCenter] = useState([location.latitude, location.longitude])



  return (
    // <MapContainer className="w-full h-full bg-grey" />

    <MapContainer
      id="map"
      center={center}
      zoom={6}
      className="w-full h-full bg-yellow"
      zoomControl={false}

    >
      <TileLayer
        url={process.env.WEATHER_MAP_URL}
      // attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
      />

      <FlyMapTo center={center} zoom={6} />

    </MapContainer>
  )
}



