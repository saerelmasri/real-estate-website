"use client";

import ListingComponent from "@/components/ListingComponent";
import { fetchData } from "@/tools/api";
import { Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Property = {
  id: string;
  name: string;
  price: number;
  size: number;
  location: string;
  imageNumber: number;
  readyToMove: boolean;
};

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState<Property[]>([
    {
      id: "",
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
        setIsLoading(true);
        const response = await fetchData("/api/property");
        if (response && response.data) {
          setProperties(response.data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setIsLoading(false);
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
            New Listed Properties
          </Typography>
          <Typography className="text-2xl font-medium leading-snug text-black pr-[30%] mt-10">
            Discover our latest collection of modern, luxurious homes and
            apartments. Each property is designed with elegance and
            functionality in mind, ready to become your dream home.
          </Typography>
        </div>
        <Grid
          container
          spacing={2}
          gap={3}
          className="w-full pl-[10%] pt-[5%] pb-[5%]"
        >
          {isLoading ? (
            <Grid item xs={12}>
              <Skeleton width={"700px"} height={"800px"} />
            </Grid>
          ) : properties.length > 0 ? (
            properties.map((item) => (
              <Grid item sm={12} md={12} lg={5} xl={3.5} key={item.id}>
                <ListingComponent
                  propertyId={item.id}
                  propertyTitle={item.name}
                  propertyPrice={item.price}
                  propertyLocation={item.location}
                  propertySquare={String(item.size)}
                  imageNumber={item.imageNumber}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <p>No properties available</p>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
