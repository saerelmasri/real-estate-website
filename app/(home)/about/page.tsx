"use client";

import AboutPoints from "@/components/AboutPoints";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import SocialBtn from "@/components/SocialBtn";
import { whoAreWe } from "@/constants";
import { Button, Divider, Typography, keyframes } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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

function About() {
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
        threshold: 0.2,
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
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
          <Typography className="font-satoshi-medium text-3xl md:text-6xl text-black leading-snug md:leading-tight">
            <strong className="text-xl font-satoshi-regular ">ABOUT</strong>
            &nbsp;&nbsp; Welcome to <strong>Habitat</strong>, where modern minimalism
            meets luxury. We specialize in creating and offering elegant,
            contemporary homes characterized by clean lines, open spaces, and
            top-tier craftsmanship.<br/> Our team of experts is dedicated to
            delivering exceptional quality and innovative design in every
            property.From sleek urban apartments to spacious family homes, each
            of our properties reflects our commitment to excellence and
            sustainability.<br/>Discover the perfect home that aligns with your
            modern lifestyle at <strong>Habitat</strong>.
          </Typography>
        </div>
        <div className="w-full flex-col md:flex-row">
          <div className="w-[40%] pl-[10%] pt-[5%]">
            <Typography className="text-black  font-satoshi-medium text-base font-medium uppercase">
              Who we are
            </Typography>
          </div>
          <div>
            <Typography className="text-black font-satoshi-medium text-4xl pl-[10%] pt-[5%]">
              Our core values to succeed
            </Typography>
            <div className="h-full flex flex-col">
              {whoAreWe.map((item, index) => (
                <>
                  {index === 0 ? (
                    <></>
                  ) : (
                    <Divider
                      sx={{ opacity: 0.8, width: "70%", marginLeft: "10%" }}
                    />
                  )}
                  <AboutPoints
                    key={index}
                    point={item.pointNumber}
                    title={item.title}
                    description={item.description}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
