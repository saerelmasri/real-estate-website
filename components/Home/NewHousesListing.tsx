/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Divider, Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import React, { useEffect, useMemo, useRef, useState } from "react";
import GridListing from "./GridListing";

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

const slideUpFromBehind = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

function NewHousesListing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.9,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#f7f5f4] flex flex-col items-center"
    >
      {isVisible && (
        <>
          <div className="w-full flex flex-col pl-[12%]">
            <Typography
              variant="body2"
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
                animation: `${slideInFromBottom} 0.8s ease-out`,
              }}
            >
              YOU ARE LOOKING FOR
            </Typography>
            <div style={{ overflow: "hidden" }}>
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "black",
                  animation: `${slideUpFromBehind} 1s ease-out`,
                  animationDelay: "0.3s", // Adds a slight delay for a staggered effect
                }}
                className="text-7xl md:text-9xl"
              >
                New Houses
              </Typography>
            </div>
          </div>
          <Divider sx={{ opacity: 0.8, width: "80%", marginTop: 5 }} />
          <Box className="w-full">
            <GridListing slideInFromBottom={slideInFromBottom} />
          </Box>
        </>
      )}
    </div>
  );
}

export default NewHousesListing;
