/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Marquee from "react-fast-marquee";
import Name from "@/components/Home/Name";
import NewHousesListing from "@/components/Home/NewHousesListing";
import AboutSection from "@/components/Home/AboutSection";
import QASection from "@/components/Home/QASection";

function Home() {
  return (
    <div>
      <div className="bg-hero bg-cover bg-center bg-no-repeat bg-opacity-25 w-full h-[200vh] flex flex-col">
        <Name />
        <div className=" w-full h-[150vh] mt-[100px] flex flex-col justify-end items-center pl-[30%] pr-[30%] pb-10">
          <Typography
            sx={{ fontSize: "25px", fontWeight: "500", textAlign: "center" }}
          >
            Whether you're looking for a charming apartment or a roomy family
            home, we know how crucial location is. We're dedicated to finding
            the most sought-after spots. Sounds appealing? Begin your search
            today!
          </Typography>
        </div>
      </div>
      <div
        className={"w-full h-[70vh] bg-[#f7f5f4] flex flex-col items-center"}
      >
        <div className={" w-full h-[25%] flex items-center pl-[12%]"}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "900",
              color: "black",
              textTransform: "uppercase",
            }}
          >
            Discover More
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.8, width: "80%" }} />
        <Marquee pauseOnHover>
          <Typography
            sx={{
              fontSize: "90px",
              fontWeight: "semibold",
              color: "#bfbebd",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Top Noch Home Listing - Real Estate Listing and More - &nbsp;
          </Typography>
        </Marquee>
        <Divider sx={{ opacity: 0.8, width: "80%" }} />
        <Marquee pauseOnHover direction="right">
          <Typography
            sx={{
              fontSize: "90px",
              fontWeight: "semibold",
              color: "#bfbebd",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Best Listing/ Minimalistic Designs/ Modern Designs/ Real Estate
            Projects/ &nbsp;
          </Typography>
        </Marquee>
        <Divider sx={{ opacity: 0.8, width: "80%" }} />
        <div className={"h-[25%]"} />
      </div>
      <NewHousesListing />
      <AboutSection />
      <div className="w-full h-[100vh] bg-[#f7f5f4] flex flex-col items-center">
        <div className="w-full flex flex-col pl-[12%] h-[20%]">
          <Typography
            variant="body2"
            sx={{
              fontWeight: "900",
              color: "black",
              textTransform: "uppercase",
            }}
          >
            Find Answers To You
          </Typography>
          <div style={{ overflow: "hidden", height: "150px" }}>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
              }}
              className={"text-9xl"}
            >
              Questions
            </Typography>
          </div>
        </div>
        <Divider sx={{ opacity: 0.8, width: "80%", marginTop: 5 }} />
        <QASection />
      </div>
    </div>
  );
}

export default Home;
