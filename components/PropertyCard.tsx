/* eslint-disable @next/next/no-img-element */
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { kFormatter } from "./Home/GridListing";
import { useRouter } from "next/navigation";

type PropertyCard = {
  id: number;
  name: string;
  propertyUse: string;
  price: number;
  size: number;
  location: string;
  imageNumber: number;
  readyToMove: boolean;
  index: number;
  onHover: () => void;
  onHoverOut: () => void;
  isHovering: boolean;
};

function PropertyCard({
  id,
  name,
  propertyUse,
  price,
  size,
  location,
  imageNumber,
  readyToMove,
  onHover,
  onHoverOut,
  isHovering,
}: PropertyCard) {
  const route = useRouter();
  return (
    <Card
      sx={{
        borderRadius: "0",
        border: isHovering ? "1px solid black" : "none",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <CardActionArea
        onClick={() => {
          route.push(`/property/${id}`);
        }}
        className={
          "border border-black w-full h-[200px] flex items-center mb-0.5 cursor-pointer"
        }
      >
        <CardMedia className={"w-2/4 h-[100%]"}>
          <img
            src={`/images/house${imageNumber}.jpeg`}
            alt="Menu Image"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </CardMedia>
        <div className={"w-3/5 h-[80%] pl-[5%] flex flex-col justify-between"}>
          <div>
            <Typography className="font-satoshi-medium text-base text-black uppercase font-semibold">
              {name}
            </Typography>
            <Typography className="font-satoshi-medium text-xs text-gray-500">
              {size}m2
            </Typography>
          </div>
          <div>
            <Typography className="font-satoshi-medium text-xs text-gray-500">
              ${kFormatter(price)}
            </Typography>
            <Typography className="font-satoshi-medium text-xs text-gray-500">
              {propertyUse}
            </Typography>
          </div>
          <div>
            <Typography className="font-satoshi-medium text-xs text-gray-500">
              {location}
            </Typography>
          </div>
          <div>
            <Typography className="font-satoshi-medium text-xs text-gray-500">
              Ready to move: {readyToMove == true ? "Yes" : "No"}
            </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default PropertyCard;
