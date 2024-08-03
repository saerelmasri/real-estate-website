import React, { useEffect, useRef } from "react";
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

type Property = {
  id: number;
  name: string;
  propertyUse: string;
  price: number;
  size: number;
  location: string;
  imageNumber: number;
  readyToMove: boolean;
  latitude: number;
  longitude: number;
};

type SearchPageMapProps = {
  properties: Property[];
  hoveredProperty: Property | null;
};

function SearchPageMap({ properties, hoveredProperty }: SearchPageMapProps) {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapElement.current || properties.length === 0) return;

    const features = properties.map((property) => {
      const iconFeature = new Feature({
        geometry: new Point(
          fromLonLat([property.longitude, property.latitude])
        ),
      });

      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        }),
      });

      iconFeature.setStyle(iconStyle);
      return iconFeature;
    });

    const vectorSource = new VectorSource({
      features,
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
        center: fromLonLat([properties[0].longitude, properties[0].latitude]),
        zoom: 10,
      }),
    });

    mapRef.current = map;

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(undefined);
      }
    };
  }, [properties]);

  useEffect(() => {
    if (mapRef.current) {
      const view = mapRef.current.getView();
      view.animate({
        center: fromLonLat([
          hoveredProperty?.longitude ?? properties[0].longitude,
          hoveredProperty?.latitude ?? properties[0].latitude,
        ]),
        duration: 500,
      });
    }
  }, [hoveredProperty, properties]);

  return <div className={"w-full h-full"} ref={mapElement} />;
}

export default SearchPageMap;
