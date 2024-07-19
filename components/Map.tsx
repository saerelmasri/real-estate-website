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

type MapCoordinates = {
  longitude: number;
  latitude: number;
};

const MapComponent = ({ longitude, latitude }: MapCoordinates) => {
  const mapElement = useRef(null);

  useEffect(() => {
    if (!longitude || !latitude) return;

    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
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
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]),
        zoom: 10,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, [longitude, latitude]);

  return <div ref={mapElement} className="w-full mt-[5%] h-[600px]"></div>;
};

export default MapComponent;
