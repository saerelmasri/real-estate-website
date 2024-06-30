/* eslint-disable react/no-unescaped-entities */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@mui/system";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

function AboutSection() {
  const [isVisibleText, setIsVisibleText] = useState(false);
  const [isVisibleImage, setIsVisibleImage] = useState(false);
  const [isVisibleParagraph, setIsVisibleParagraph] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleText(true);
          observerText.disconnect();
        }
      },
      {
        threshold: 0.9,
      }
    );

    const observerImage = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleImage(true);
          observerImage.disconnect();
        }
      },
      {
        threshold: 1,
      }
    );

    const observerParagraph = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleParagraph(true);
        }
      },
      {
        threshold: 1,
      }
    );

    if (textRef.current) {
      observerText.observe(textRef.current);
    }
    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }
    if (paragraphRef.current) {
      observerParagraph.observe(paragraphRef.current);
    }

    return () => {
      if (textRef.current) {
        observerText.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observerImage.unobserve(imageRef.current);
      }
      if (paragraphRef.current) {
        observerParagraph.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#f7f5f4] pb-10">
      <div className="flex items-center justify-between pl-[10%] pr-[10%] h-[5%]">
        <Typography
          ref={textRef}
          variant="body2"
          sx={{
            fontWeight: "900",
            color: "black",
            textTransform: "uppercase",
            animation: isVisibleText
              ? `${slideInFromLeft} 1s ease-out`
              : "none",
          }}
        >
          WE MAKE IT BETTER
        </Typography>
        <div className="flex gap-2">
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "500",
              color: "black",
              textTransform: "capitalize",
              cursor: "pointer",
              animation: isVisibleText
                ? `${slideInFromRight} 1s ease-out`
                : "none",
            }}
          >
            Learn More
          </Typography>
          <ArrowRightAltIcon sx={{ color: "black", cursor: "pointer" }} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 flex justify-start items-center sm:pl-[10%] mt-5"
          style={{
            animation: isVisibleImage
              ? `${slideInFromLeft} 1s ease-out`
              : "none",
          }}
        >
          <img
            src="/images/living.jpg"
            alt="Menu Image"
            className="w-[80%] h-[50%] lg:h-[80%] xl:w-[70%]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex mt-5 md:mt-0 sm:pl-[10%]">
          <Typography
            ref={paragraphRef}
            color={"black"}
            className={
              "font-satoshi-medium font-medium text-3xl pr-[25%] mt-16 leading-normal"
            }
            style={{
              animation: isVisibleParagraph
                ? `${slideInFromRight} 1s ease-out`
                : "none",
            }}
          >
            Welcome to <strong>Habitat</strong>, where modern living meets
            exceptional service. We are dedicated to redefining the real estate
            experience with a keen focus on contemporary design, prime
            locations, and unparalleled client care. Whether you're searching
            for a sleek urban apartment, a sprawling suburban estate, or a
            luxurious waterfront retreat, our team is committed to finding your
            perfect property match. At <strong>Habitat</strong>, we blend
            innovation with expertise to ensure every aspect of your real estate
            journey is seamless and rewarding. Discover a new standard in home
            buying and selling with us today.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
