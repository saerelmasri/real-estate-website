"use client";

import ListingComponent from "@/components/ListingComponent";
import { fetchData } from "@/tools/api";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Property = {
  id: number;
  name: string;
  price: number;
  size: number;
  location: string;
  imageNumber: number;
  readyToMove: boolean;
};

function FutureProjects() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 0,
      name: "",
      price: 0,
      size: 0,
      location: "",
      imageNumber: 0,
      readyToMove: false,
    },
  ]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetchData("/api/property");
        if (response && response.data) {
          setProperties(response.data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{ fontWeight: "500", textAlign: "center" }}
            className="text-7xl lg:text-9xl font-satoshi-regular text-black"
          >
            Future - Projects
          </Typography>
          <Typography className="text-2xl font-medium leading-snug text-black pr-[30%] mt-10">
            Explore our upcoming developments, where innovation meets luxury.
            Stay tuned for modern, cutting-edge properties designed to elevate
            your living experience.
          </Typography>
        </div>
        <Grid
          container
          spacing={2}
          gap={3}
          className="w-full pl-[10%] pt-[5%] pb-[5%]"
        >
          {properties.map((item, index) => (
            <Grid item md={3.5} key={index}>
              <ListingComponent
                propertyId={item.id}
                propertyTitle={item.name}
                propertyPrice={item.price}
                propertyLocation={item.location}
                propertySquare={String(item.size)}
                imageNumber={item.imageNumber}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FutureProjects;
