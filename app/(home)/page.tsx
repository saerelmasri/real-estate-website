/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div>
      <div className="bg-hero bg-cover bg-center bg-no-repeat bg-opacity-25 w-full h-[200vh] flex flex-col">
        <div className="w-full h-[100vh] mt-[100px] flex flex-col justify-center items-center">
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            REALISTICA / WHERE YOU FILL SAFE
          </Typography>
          <Typography
            sx={{
              fontSize: "200px",
              fontWeight: "semibold",
              textTransform: "uppercase",
            }}
          >
            Habitat
          </Typography>
        </div>
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
        <div className={" w-full h-[25%] flex items-center pl-[5%]"}>
          <Typography
            variant="h6"
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
      <div className={"w-full bg-[#f7f5f4] flex flex-col items-center"}>
        <div className={" w-full flex flex-col pl-[5%]"}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              color: "black",
              textTransform: "uppercase",
            }}
          >
            YOU ARE LOOKING FOR
          </Typography>
          <Typography
            sx={{
              fontSize: "120px",
              fontWeight: "500",
              color: "black",
            }}
          >
            New Houses
          </Typography>
        </div>
        <Divider sx={{ opacity: 0.8, width: "80%" }} />
        <div className={" w-full h-[80vh] border mt-10"}>

        </div>
      </div>
    </div>
  );
}

export default Home;
