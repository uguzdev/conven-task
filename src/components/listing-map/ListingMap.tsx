import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { FC } from "react";
import HomeIcon from "../../assets/icons/home.svg";
const mapContainerStyle: React.CSSProperties = {
  color: "red",
  display: "flex",
  flex: 1,
  width: "100%",
  height: "100vh",
};

const ListingMap: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: 41.060485, lng: 28.9809433 }}
      zoom={14}
    >
      <Marker
        icon={{
          url: HomeIcon,
          scale: 0.5,
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
        clickable
        position={{ lat: 41.060485, lng: 28.9809433 }}
      />
      <Marker
        icon={{
          url: HomeIcon,
          scale: 0.5,
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
        clickable
        position={{ lat: 41.060485, lng: 28.9909433 }}
      />
      <Marker
        icon={{
          url: HomeIcon,
          scale: 0.5,
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
        clickable
        position={{ lat: 41.040485, lng: 28.9909433 }}
      />
      <Marker
        icon={{
          url: HomeIcon,
          scale: 0.5,
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
        clickable
        position={{ lat: 41.050485, lng: 28.9909433 }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default ListingMap;
