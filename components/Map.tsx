import React, { useRef, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MapComponent = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([-74.006, 40.7128])), // Hard-coded coordinates (e.g., New York City)
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL to the marker image
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        vectorLayer, // Add the vector layer containing the marker
      ],
      view: new View({
        center: fromLonLat([-74.006, 40.7128]), // Center on the marker coordinates
        zoom: 10,
      }),
    });

    // Clean up on unmount
    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      ref={mapElement}
      className="w-full mt-[5%] h-[600px]"
    ></div>
  );
};

export default MapComponent;
