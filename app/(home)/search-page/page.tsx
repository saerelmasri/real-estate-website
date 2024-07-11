/* eslint-disable @next/next/no-img-element */
"use client";
import SelectComponent from "@/components/SelectComponent";
import { Grid, Typography } from "@mui/material";
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
import { Box } from "@mui/system";

function SearchPage() {
  const mapElement = useRef(null);

  useEffect(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([-74.006, 40.7128])), // Hard-coded coordinates (e.g., New York City)
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // URL to the marker image
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
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
          <Grid
            container
            spacing={2}
            gap={7}
            className="border border-black w-full flex justify-center p-[2%]"
          >
            <Grid item lg={1.5}>
              <SelectComponent title="Pricing" />
            </Grid>
            <Grid item lg={1.5}>
              <SelectComponent title="Type" />
            </Grid>
            <Grid item lg={1.5}>
              <SelectComponent title="City" />
            </Grid>
            <Grid item lg={1.5}>
              <SelectComponent title="Property" />
            </Grid>
          </Grid>
        </div>
        <div className="border border-black w-full h-[100vh] flex">
          <div className="w-3/4" ref={mapElement} />
          <div className="border border-black w-1/4 overflow-visible flex flex-col">
            <Box
              className={
                "border border-black w-full h-[35%] flex items-center p-[5%]"
              }
            >
              <div className={"w-2/5 h-[90%] border border-black"}>
                <img
                  src="/images/house1.jpeg"
                  alt="Menu Image"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"w-3/5 h-[90%] border border-black"}>
                <div>
                  <Typography className="font-satoshi-medium text-base text-black uppercase">
                    Borg 15
                  </Typography>
                  <Typography className="font-satoshi-medium text-xs text-gray-500">
                    Single Family
                  </Typography>
                </div>
                <div>
                  <Typography className="font-satoshi-medium text-xs text-gray-500">
                    2 bds - 3 ba
                  </Typography>
                  <Typography className="font-satoshi-medium text-xs text-gray-500">
                    1450 sq. ft.
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
