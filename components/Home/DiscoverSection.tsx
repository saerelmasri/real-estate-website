/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IconButton, Typography, keyframes } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styled from "styled-components";

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  color: "white",
  background: "black",
  "& .MuiSvgIcon-root": {
    position: "relative",
    zIndex: 1,
    transition: "color 1s",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300%",
    height: "300%",
    backgroundColor: "#ffffff",
    transform: "translate(-50%, -50%) scale(0)",
    transition: "transform 1s",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&:hover::before": {
    transform: "translate(-50%, -50%) scale(1)",
  },
  "&:hover .MuiSvgIcon-root": {
    color: "#000000",
  },
}));

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

type DiscoverProp = {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
};

function DiscoverSection({
  imageUrl,
  projectName,
  projectDescription,
}: DiscoverProp) {
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
        threshold: 0.5,
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
      className={`w-full h-[90vh] ${imageUrl} bg-cover bg-no-repeat bg-center flex flex-col justify-center relative`}
      ref={sectionRef}
    >
      {isVisible && (
        <>
          <div className="w-full h-[30%] flex justify-center items-center">
            <Typography
              className="text-9xl md:text-[207px] text-white"
              sx={{
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            >
              {projectName}
            </Typography>
          </div>
          <div
            className="w-full h-[20%] flex justify-center items-center gap-5"
            style={{
              animation: `${slideUpFromBehind} 1s ease-out`,
              animationDelay: "0.3s",
            }}
          >
            <Typography className="text-lg md:text-xl font-semibold text-white">
              Discover the Project
            </Typography>
            <AnimatedIconButton size="small">
              <ArrowRightAltIcon />
            </AnimatedIconButton>
          </div>
          <div className="w-full h-[20%] flex justify-start items-end gap-5 absolute bottom-0 left-0 p-10">
            <Typography
              className="text-md md:text-xl font-semibold text-white"
              sx={{
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            >
              {projectDescription}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
}

export default DiscoverSection;
