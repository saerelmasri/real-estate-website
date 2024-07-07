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

type ListingProps = {
  imageURL: string;
  propertyTitle: string;
  propertyLocation: string;
  propertySquare: string;
  propertyReadyIn?: string;
};

function ListingComponent() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        background: "none",
        borderRadius: 0,
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 500 }}
          image="images/house1.jpeg"
          title="green iguana"
        />
      </CardActionArea>
      <CardContent sx={{ padding: 0 }}>
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-xl">
            BORG 15
          </Typography>
          <Typography className="font-satoshi-medium text-xl">
            $320.000
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.2 }} className="w-[100%]" color="black" />
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            Location
          </Typography>
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            Los Angeles
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.2 }} className="w-[100%]" color="black" />
        <div className="flex justify-between items-center pt-3 pb-3">
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            Square Meters
          </Typography>
          <Typography className="font-satoshi-medium text-sm text-gray-500">
            200m2
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default ListingComponent;
