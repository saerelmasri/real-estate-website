import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropertyCard from "../Property/PropertyCard";
import { fetchData } from "@/tools/api";

type Details = {
  id: number;
  detail: string;
  quantity: number;
  propertiesId: number;
};

type Property = {
  id: number;
  name: string;
  propertyUse: string;
  price: number;
  size: number;
  location: string;
  readyToMove: boolean;
  project: string;
  latitude: string;
  longitude: string;
  imageNumber: string;
  detail: Details[];
};

export function kFormatter(num: number): string {
  if (Math.abs(num) >= 1e6) {
    // Convert millions and above to "M" format
    return (num / 1e6).toFixed(1) + "M";
  } else if (Math.abs(num) >= 1e3) {
    // Convert thousands to "k" format
    return (num / 1e3).toFixed(1) + "k";
  } else {
    // Return the number as-is for smaller numbers
    return String(num);
  }
}
function GridListing({ slideInFromBottom }: { slideInFromBottom: string }) {
  const [propertyArray, setPropertyArray] = useState<Property[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetchData("/api/property");
        if (response && response.data) {
          setPropertyArray(response.data);
          setCount((prevCount) => prevCount + 1);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        // Handle error state if needed
      }
    };

    fetchProperties();
  }, []);

  console.log("property:", propertyArray);
  console.log("renders:", count);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        paddingTop: 10,
        paddingBottom: 10,
        animation: `${slideInFromBottom} 1.2s ease-out`,
        opacity: 1,
      }}
      className="flex-col justify-center items-start pl-[10%] pr-[10%] lg:flex-row md:items-center lg:pl-0 lg:pr-0"
    >
      {propertyArray.slice(0, 3).map((property, index) => (
        <Grid item xs={3} key={index}>
          <PropertyCard
            propertyId={property.id}
            imageProperty={`/images/prop${property.imageNumber}.jpg`} // Example image path
            propertyName={property.name}
            propertyLocation={property.location}
            propertySize={property.size}
            propertyPrice={kFormatter(property.price)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default GridListing;
