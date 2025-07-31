"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function LeafletMapWrapper({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  return <Map lat={lat} lng={lng} />;
}
