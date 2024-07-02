import { Divider, Typography } from "@mui/material";
import React from "react";

type AboutPointsType = {
    point: string;
    title: string;
    description: string;
}

function AboutPoints({ point, title, description} : AboutPointsType) {
  return (
    <>
      <div className="flex pl-[10%] pt-[5%] pb-[5%] pr-[20%] gap-5">
        <Typography className="text-black text-xl">{point}</Typography>
        <div>
          <Typography className="font-satoshi-medium text-2xl text-black">
            {title}
          </Typography>
          <Typography className="font-satoshi-medium text-xl text-gray-500 mt-2">
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default AboutPoints;
