"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import SocialBtn from "@/components/SocialBtn";
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

function Contact() {
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
    <div className="bg-[#262626] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{ fontWeight: "500", textAlign: "center" }}
            className="text-8xl lg:text-9xl"
          >
            Contact Us
          </Typography>
          <Divider
            sx={{ opacity: 0.2, marginTop: 5 }}
            className="w-[80%] md:w-[40%]"
            color="white"
          />
          <div className="w-[80%] md:w-[40%] flex items-center justify-between mt-10">
            <Typography className="w-1/2 font-satoshi-medium text-base text-[#747474]">
              Socials:
            </Typography>
            <div className="flex w-1/2 font-satoshi-medium text-base  gap-1">
              <SocialBtn title="Instagram" />
              <SocialBtn title="Facebook" />
              <SocialBtn title="Twitter" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white p-[10%] md:p-[10%] gap-5 md:gap-10">
            <Typography className="text-sm md:text-base font-semibold">
              34 West Menlo — SF, CA
            </Typography>
            <Typography className="text-3xl md:text-4xl font-medium leading-snug">
              Thank you for visiting us! We appreciate your interest and would
              love to hear from you. Feel free to visit us at our office, give
              us a call, or send us an email with any questions or inquiries. We
              look forward to connecting with you!
            </Typography>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white p-[10%] md:p-[10%] gap-5 md:gap-10">
            <Typography className="text-sm md:text-base font-semibold">
              Phone Number / Email
            </Typography>
            <Typography className="text-3xl md:text-4xl font-semibold leading-snug">
              +3 2343 4323 432
            </Typography>
            <Typography className="text-3xl md:text-4xl font-semibold leading-snug">
              sales@habitat.com
            </Typography>
          </div>
        </div>
        <div className="flex justify-center items-center" ref={sectionRef}>
          {isVisible && (
            <Typography
              className="text-[146px] md:text-[355px]"
              sx={{
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            >
              Habitat
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
