"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import AboutPoints from "@/components/AboutPoints";
import RatingComponent from "@/components/Rating";
import SocialBtn from "@/components/SocialBtn";
import TeamCard from "@/components/TeamCard";
import { teamMember, whoAreWe } from "@/constants";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
          <Typography className="font-satoshi-medium text-3xl md:text-5xl text-black leading-snug md:leading-tight">
            <strong className="text-xl font-satoshi-regular ">ABOUT</strong>
            &nbsp;&nbsp; Welcome to <strong>Habitat</strong>, where modern
            minimalism meets luxury. We specialize in creating and offering
            elegant, contemporary homes characterized by clean lines, open
            spaces, and top-tier craftsmanship.
            <br /> Our team of experts is dedicated to delivering exceptional
            quality and innovative design in every property.From sleek urban
            apartments to spacious family homes, each of our properties reflects
            our commitment to excellence and sustainability.
            <br />
            Discover the perfect home that aligns with your modern lifestyle at{" "}
            <strong>Habitat</strong>.
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row">
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
        <RatingComponent />
        <div className="w-full flex flex-col md:flex-row h-full pb-[10%]">
          <div className="w-[30%] pl-[10%] pt-[5%]">
            <Typography className="text-black  font-satoshi-medium text-base font-medium uppercase">
              MEET THE TEAM
            </Typography>
          </div>
          <div>
            <Typography className="text-black font-satoshi-medium text-lg pl-[10%] pt-[5%]">
              ALL FOR ONE AND ONE FOR ALL
            </Typography>
            <Typography className="text-black font-satoshi-medium text-4xl pl-[10%] pt-[2%] pr-[5%] md:pr-[10%]">
              At <strong>Habitat</strong>, our dedicated team combines expertise
              in real estate, architecture, sales, and construction to deliver
              exceptional homes. Get to know the professionals who make your
              dream home a reality.
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              className={"pl-[10%] pr-[10%] pt-[5%]"}
            >
              {teamMember.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                  <TeamCard
                    imageURL={item.imageURL}
                    name={item.name}
                    position={item.position}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
