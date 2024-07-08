"use client";

import { Button, Divider, IconButton, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import styled from "styled-components";

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  color: "white",
  backgroundColor: "black",
  transition: "color 1s, background-color 1s",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "0%",
    left: "50%",
    width: "300%",
    height: "300%",
    backgroundColor: "#ffffff",
    transform: "translate(-50%, 50%) scale(0)",
    transition: "transform 1s",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&:hover::before": {
    transform: "translate(-50%, 50%) scale(1)",
  },
  "&:hover": {
    "& span": {
      color: "#000000",
      position: "relative",
      zIndex: 1,
      fontSize: "inherit",
      fontWeight: "inherit",
      fontFamily: "inherit",
      fontStyle: "inherit",
      fontStretch: "inherit",
      fontVariant: "inherit",
    },
  },
}));

function FutureProjects() {
  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{ fontWeight: "500", textAlign: "center" }}
            className="text-7xl lg:text-9xl font-satoshi-regular text-black"
          >
            BORG 15
          </Typography>
        </div>
        <div className="w-full flex flex-col justify-center items-start pl-[10%] pb-[5%] pr-[10%]">
          <div className="w-full p-5">
            <Typography className="text-sm font-satoshi-medium text-gray-500">
              SINGLE FAMILY / BORG 15 /
            </Typography>
          </div>
          <Divider sx={{ width: "100%", color: "#6b7280", marginTop: 2 }} />
          <div className="w-full flex ">
            <div className="w-1/3  flex justify-between items-center">
              <Typography className="text-6xl font-satoshi-regular text-black p-5">
                $320.000
              </Typography>
              <Divider orientation="vertical" sx={{ color: "#6b7280" }} />
            </div>
            <div className="w-1/3 flex justify-between">
              <div className="w-[60%] flex">
                <div className="w-[60%] h-full flex flex-col">
                  <div className="h-1/2 flex justify-center items-center">
                    <Typography className="font-satoshi-medium text-xl text-black">
                      3120 SQ. FT.
                    </Typography>
                  </div>
                  <div className="h-1/2 flex justify-center items-center p-5">
                    <Typography className="font-satoshi-medium text-sm text-black">
                      300 Drive Street Warm Springs, Tenerife
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-full flex flex-col">
                <div className="h-1/2 flex justify-end items-center pr-5">
                  <Typography className="font-satoshi-medium text-xl text-black uppercase font-medium">
                    Status
                  </Typography>
                </div>
                <div className="h-1/3 flex flex-col justify-center items-end pr-5">
                  <Typography className="font-satoshi-regular text-xs text-gray-500">
                    Ready to move
                  </Typography>
                  <KeyIcon sx={{ color: "black" }} fontSize="medium" />
                </div>
              </div>
              <Divider orientation="vertical" sx={{ color: "#6b7280" }} />
            </div>
            <div className="w-1/3  flex justify-end items-center">
              <AnimatedButton
                variant="contained"
                size="large"
                className={
                  "rounded-3xl h-2/5 w-2/5 bg-black text-white font-semibold font-satoshi-medium text-xs"
                }
              >
                <span>Contact an Agent</span>
              </AnimatedButton>
            </div>
          </div>
          <div className="border border-black w-full mt-[5%]">

          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureProjects;
