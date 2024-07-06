"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Typography, keyframes } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { ratingInfo } from "@/constants";

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

function RatingComponent() {
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
    <div className="p-[10%] flex flex-col md:flex-row gap-3" ref={sectionRef}>
      {isVisible &&
        ratingInfo.map((item, index) => (
          <Box
            key={index}
            className="md:w-[30%] flex flex-col justify-around p-5"
            sx={{
              animation: `${slideUpFromBehind} 1s ease-out`,
              animationDelay: "0.3s",
            }}
          >
            <Rating
              name="simple-controlled"
              value={item.value}
              precision={0.5}
              readOnly
              size="large"
            />
            <Divider
              sx={{
                opacity: 0.8,
                width: "100%",
                marginTop: 2,
                marginBottom: 2,
              }}
            />
            <Typography className="font-satoshi-medium text-2xl text-black mb-5">
              {item.title}
            </Typography>
            <Typography className="font-satoshi-medium text-lg text-gray-500  mb-5">
              {item.comment}
            </Typography>
            <Typography className="font-satoshi-medium text-lg text-gray-500">
              {item.author}
            </Typography>
          </Box>
        ))}
    </div>
  );
}

export default RatingComponent;
