import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon path
import markerIcon2x from "@/public/leaflet/marker-icon-2x.png";
import markerIcon from "@/public/leaflet/marker-icon.png";
import markerShadow from "@/public/leaflet/marker-shadow.png";

// Set default marker icon
const icon = new L.Icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ lat, lng }: { lat: number; lng: number }) {
  return (
    <div className="h-[400px] w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.7749, -122.4194]} icon={icon}>
          <Popup>San Francisco, CA</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
