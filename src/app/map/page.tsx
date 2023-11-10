"use client";
import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN &&
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN.replaceAll('"', "");

function MapPage() {
  return (
    <div className="h-full w-full ">
      <Map
        initialViewState={{
          latitude: 51.2,
          longitude: -115.6917,
          zoom: 8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        // onClick={onMouseClick}
        // cursor={cursor}
        mapboxAccessToken={MAPBOX_TOKEN ?? ""}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </Map>
    </div>
  );
}

export default MapPage;
