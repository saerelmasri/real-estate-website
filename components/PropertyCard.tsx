/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import React from "react";

function PropertyCard() {
  return (
    <Box
      className={
        "border border-black w-full h-[300px] flex items-center p-[2%] mb-0.5 cursor-pointer"
      }
    >
      <div className={"w-2/5 h-[80%]"}>
        <img
          src="/images/house1.jpeg"
          alt="Menu Image"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className={"w-3/5 h-[80%] pl-[5%] flex flex-col justify-between"}>
        <div>
          <Typography className="font-satoshi-medium text-base text-black uppercase font-semibold">
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
        <div>
          <Typography className="font-satoshi-medium text-xs text-gray-500">
            7453 Middlefield RD
          </Typography>
          <Typography className="font-satoshi-medium text-xs text-gray-500">
            West Menlo Park - New York
          </Typography>
        </div>
        <div>
          <Typography className="font-satoshi-medium text-xs text-gray-500">
            Ready to move
          </Typography>
          <Typography className="font-satoshi-medium text-sm font-semibold text-black cursor-pointer">
            See more
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default PropertyCard;
