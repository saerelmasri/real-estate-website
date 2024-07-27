"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { kFormatter } from "./Home/GridListing";
import { useRouter } from "next/navigation";

type ListingProps = {
  propertyId: number;
  imageNumber: number;
  propertyTitle: string;
  propertyPrice: number;
  propertyLocation: string;
  propertySquare: string;
  propertyReadyIn?: string;
};

function ListingComponent({
  propertyId,
  imageNumber,
  propertyTitle,
  propertyPrice,
  propertyLocation,
  propertySquare,
}: ListingProps) {
  const router = useRouter();
  return (
    <Card
      sx={{
        boxShadow: "none",
        background: "none",
        borderRadius: 0,
      }}
    >
      <CardActionArea
        onClick={() => {
          router.push(`/property/${propertyId}`);
        }}
      >
        <CardMedia
          sx={{ height: 500 }}
          image={`images/house${imageNumber}.jpeg`}
          title={propertyTitle}
        />
      </CardActionArea>
      <CardContent sx={{ padding: 0 }}>
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-xl">
            {propertyTitle}
          </Typography>
          <Typography className="font-satoshi-medium text-xl">
            ${kFormatter(propertyPrice)}
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.2 }} className="w-[100%]" color="black" />
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            Location
          </Typography>
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            {propertyLocation}
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.2 }} className="w-[100%]" color="black" />
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            Square Meters
          </Typography>
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            {propertySquare}m2
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default ListingComponent;
