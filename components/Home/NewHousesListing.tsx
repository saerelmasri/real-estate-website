/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Divider, Grid, Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../Property/PropertyCard";

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
            <div style={{ overflow: "hidden", height: "150px" }}>
              <Typography
                sx={{
                  fontSize: "120px",
                  fontWeight: "500",
                  color: "black",
                  animation: `${slideUpFromBehind} 1s ease-out`,
                  animationDelay: "0.3s", // Adds a slight delay for a staggered effect
                }}
              >
                New Houses
              </Typography>
            </div>
          </div>
          <Divider sx={{ opacity: 0.8, width: "80%", marginTop: 5 }} />
          <Box className="w-full mt-5">
            <Grid
              container
              spacing={2}
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                animation: `${slideInFromBottom} 1.2s ease-out`,
                opacity: 1,
              }}
            >
              <Grid item xs={3}>
                <PropertyCard
                  imageProperty="/images/prop1.jpg"
                  propertyName="Becali Residence"
                  propertyLocation="Palo Alto"
                  propertySize="Single Family"
                  propertyPrice="320"
                />
              </Grid>

              <Grid item xs={3}>
                <PropertyCard
                  imageProperty="/images/prop1.jpg"
                  propertyName="Becali Residence"
                  propertyLocation="Palo Alto"
                  propertySize="Single Family"
                  propertyPrice="320"
                />
              </Grid>

              <Grid item xs={3}>
                <PropertyCard
                  imageProperty="/images/prop1.jpg"
                  propertyName="Becali Residence"
                  propertyLocation="Palo Alto"
                  propertySize="Single Family"
                  propertyPrice="320"
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
}

export default NewHousesListing;
