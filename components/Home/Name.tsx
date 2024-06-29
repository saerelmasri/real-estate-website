"use client";

import { Typography, keyframes } from "@mui/material";
import React from "react";

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

function Name() {
  return (
    <div className="w-full h-[100vh] mt-[100px] flex flex-col justify-center items-center">
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "500",
          textTransform: "uppercase",
          animation: `${slideInFromBottom} 1s ease-out`,
        }}
      >
        REALISTICA / WHERE YOU FILL SAFE
      </Typography>
      <Typography
        sx={{
          fontSize: "200px",
          fontWeight: "semibold",
          textTransform: "uppercase",
          animation: `${slideInFromBottom} 1.5s ease-out`,
        }}
      >
        Habitat
      </Typography>
    </div>
  );
}

export default Name;
