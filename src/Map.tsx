import { icon } from 'leaflet';
import { useMap, Marker, TileLayer } from 'react-leaflet';
import { MapInterface } from './types/types';
import { ReactComponent as ArrowIcon } from './assets/icon-arrow.svg';
import marker from "./assets/icon-location.svg"

const markerIcon = icon({
  iconUrl: marker,
  iconSize: [46, 56],
});

function Map({ info }:MapInterface) {
  const map = useMap();
  map.setView([info.location.lat, info.location.lng], 18);

  return (
    <>
      <TileLayer attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=gVyyPrzNVXnd0r58Tudm" />
      <Marker alt="marker" icon={markerIcon} position={[info.location.lat, info.location.lng]} />
    </>
  );
}

export default Map;